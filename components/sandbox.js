import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    paddingTop: 40,
    backgroundColor: "#dddd",
  },
  boxOne: {
    backgroundColor: "gold",
    padding: 10,
  },
  boxTwo: {
    backgroundColor: "red",
    padding: 10,
  },
  boxThree: {
    backgroundColor: "skyblue",
    padding: 10,
  },
  boxFour: {
    backgroundColor: "violet",
    padding: 10,
  },
});
