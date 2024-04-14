//rnfes-is react native functional export with stylesheet=we use this to generete border template for react native component
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Task = (props) => {
  return (
    <View style={styles.item}>
      {/* Test and see props are being recieved */}
      {/* <Text>This is a {props.text}</Text> */}
      <View style={styles.itemLeft}>
        <View style={styles.squareIcon}>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
      </View>
      {/* View for custom icon to the right   */}
      <View style={styles.circularIcon}></View>
    </View>
  );
};

export default Task;
//create 5 labels which need to be css
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  squareIcon: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circularIcon: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
});