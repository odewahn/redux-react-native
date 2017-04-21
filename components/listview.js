import React from "react";
import { StyleSheet, ListView, View, Text } from "react-native";
import { connect } from "react-redux";
import Post from "./post";

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#8E8E8E"
  },
  container: {
    flex: 1,
    marginTop: 20
  }
});

class ListViewDemo extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.Content.get("posts").toJS())
    };
  }
  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={p => <Post {...p} />}
        renderSeparator={(sectionId, rowId) => (
          <View key={rowId} style={styles.separator} />
        )}
      />
    );
  }
}
export default connect(state => state)(ListViewDemo);
