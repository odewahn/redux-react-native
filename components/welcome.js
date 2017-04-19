import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { styles } from "../styles/core";

import LoadingPage from "./loading";
import LoadedPage from "./loaded";

class WelcomePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.Content.get("isLoaded") ? <LoadedPage /> : <LoadingPage />}
      </View>
    );
  }
}
export default connect(state => state)(WelcomePage);
