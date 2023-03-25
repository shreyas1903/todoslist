import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      {/* now to make the list disappear make a function in the app.js component
        and then pass the input as prop to the onpress componentW */}
      <View style={styles.item}>
        <MaterialIcons name="delete" size={30} color="#333" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
  },
  itemText: {
    marginLeft: 15,
    textAlign: "center",
    marginTop: 5,
  },
});
