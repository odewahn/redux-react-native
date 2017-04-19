import React from "react";
import { Text, View } from "react-native";
import GetContentBtn from "./get-content-button";
import { styles } from "../styles/core";

export default class LoadingPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <GetContentBtn />
      </View>
    );
  }
}
