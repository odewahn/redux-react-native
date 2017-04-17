import React from "react";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";

import stateTree from "./state/index";
import Welcome from "./components/welcome";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(stateTree);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Welcome />
      </Provider>
    );
  }
}
