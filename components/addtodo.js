import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");
  //   here the value would be taken and
  //   then and then would be updated through the set text
  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={StyleSheet.input}
        placeholder="new todo..."
        // placeholder just occupies the place
        // and then when the user adds it just gets replaced
        onChangeText={(val) => changeHandler(val)}
      />
      {/* the above can also be written as 
      onChangeText= {(val) => changeHandler(val) }*/}

      <Button
        onPress={() => submitHandler(text)}
        title="add"
        color="black"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
