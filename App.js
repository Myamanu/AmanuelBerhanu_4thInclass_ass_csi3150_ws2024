import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";

// import the library to perform state management
import React, { useState } from "react";

// import components
import Task from "./components/Task";

export default function App() {
  // State container to recieving the individual input of todo task from users from the UI
  const [task, setTask] = useState();

  // state to persistently store the tasks  in an array that user adds to the app
  const [taskItems, setTaskItems] = useState([]);

  // create logic for event handler function body of TouchableOpacity component(event handler)
  const handleAddTask = () => {
    // test event handler is working
    // console.log(task);

    // Once the event is over hide the keyboard(dismiss virtual keyboard)
    Keyboard.dismiss();
    // append new task to array
    setTaskItems([...taskItems, task]);
    // reset the input area of the UI once task is added.
    setTask(null);
  };

  // create event logic to delete a task through another touchable opacity component
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    // remove item identified by index as clicked by user
    itemsCopy.splice(index, 1);
    // update original state using the clone
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/* display List of todo items */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>My Todo App</Text>

        {/* Container to show all todo items */}
        <View style={styles.items}>
          {/* render your task components below - create a resuable component in components sub-directory  */}
          {/* Test that props passing is working */}
          {/* <Task text={"This is task 1"} /> <Task text={"This is task 2"} /> */}

          {/* Iterate over the taskItems array state which stores all the tasks and pass it as props to Task component */}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      {/*Sub section that allows user to give input(create UI section for users to add tasks) */}
      {/* Make sure that the keyboard does not bleed into the app display(app will shrink to 
      accomodate the phone's keyboard popping up using the following parent component) */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        {/* UI component to get input from the user */}
        <TextInput
          style={styles.input}
          placeholder={"Add todo items"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        {/* A touch screen feedback btn to add a new tasks to the state */}
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            {/* add your icon or build your own */}
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    // allows us with postion absolute to place this item anywhere on the screen UI
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
