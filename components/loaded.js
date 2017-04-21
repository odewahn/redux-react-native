import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { styles } from "../styles/core";

class LoadedPage extends React.Component {
  render() {
    var posts = this.props.Content.get("posts").map(p => {
      return <Text>{p.get("title")}</Text>;
    });
    return (
      <View style={styles.container}>
        {posts}
      </View>
    );
  }
}
export default connect(state => state)(LoadedPage);
