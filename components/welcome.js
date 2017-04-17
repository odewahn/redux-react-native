import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

class FirstPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.User.get("email")}</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
export default connect(state => state)(FirstPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
