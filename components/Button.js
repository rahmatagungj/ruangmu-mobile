import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export const Button = (props) => {
  const { title = "Button", style = {}, textStyle = {}, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#666666",
    shadowColor: "#5f5f5f",
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
    padding: 9,
  },
  text: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});
