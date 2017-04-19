import React from "react";
import { Button } from "react-native";
import { connect } from "react-redux";
import { getPosts } from "../state/content";

class GetContentButton extends React.Component {
  render() {
    return (
      <Button
        title="Get Data"
        onPress={() => {
          this.props.dispatch(getPosts());
        }}
      />
    );
  }
}
export default connect(state => state)(GetContentButton);
