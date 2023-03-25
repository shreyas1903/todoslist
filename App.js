import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

// importing of the pages

import Header from "./components/header";
import TodoItem from "./components/todoitem";
import AddTodo from "./components/addtodo";

export default function App() {
  // in the below given todaos and setTodos is called the restructuring
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
      // here we use the filter as to remove or filter out the clicked object
      // and the parameter on which we filter it out is the key in the above case
      // the key that is passed above
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          { text: text, key: Math.random().toString() },

          // ...prevTodos is the spread operator which would mention the already existing todo lists
        ];
      });
    } else {
      Alert.alert(
        "Kindly Add a valid work",
        "characters should be more than 3",
        [{ text: "Ok da ", onPress: () => console.log("alert closed") }]
      );
    }
  };

  return (
    // how to dissmiss the keyboard when we touch somewhere else
    // to do that we have to  use the TouchableWithoutFeedback
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("keyboard dismissed");
      }}
    >
      <View style={styles.container}>
        {/* here the header page is added */}
        <Header />
        <View style={styles.content}>
          {/* add todo form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
