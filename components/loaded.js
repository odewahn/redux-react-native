import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import GetContentBtn from "./get-content-button";
import { styles } from "../styles/core";

class LoadedPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          You have data, my friend!
        </Text>
      </View>
    );
  }
}
export default connect(state => state)(LoadedPage);
