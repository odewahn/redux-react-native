import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    marginRight: 12
  },
  photo: {
    height: 96,
    width: 96,
    borderRadius: 12
  }
});

export default function Post(post) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: post.img.src }} style={styles.photo} />
      <Text style={styles.text}>
        {post.title}
      </Text>
    </View>
  );
}
