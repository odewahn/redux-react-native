/*********************************************************************
||  Import required modules
*********************************************************************/
import { fromJS } from "immutable";

/*********************************************************************
||  Define the state tree
*********************************************************************/
const INITIAL_STATE = fromJS({
  isLoaded: false,
  posts: []
});

/*********************************************************************
||  The reducer
*********************************************************************/
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "setContentField":
      return state.set(action.key, action.val);
  }
  return state;
}

function setContentField(key, val) {
  return { type: "setContentField", key: key, val: val };
}

export function getPosts() {
  return (dispatch, getState) => {
    fetch("https://gateway.oreilly.com/clients/website/all")
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then(data => {
        dispatch(setContentField("posts", fromJS(data.posts.blocks)));
        dispatch(setContentField("isLoaded", true));
      })
      .catch(err => {
        err.text().then(msg => {
          console.log("ERROR:", msg);
        });
      });
  };
}
