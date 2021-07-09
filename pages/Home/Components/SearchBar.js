import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.sectionStyle}>
      <TextInput
        style={{ flex: 1 }}
        placeholder="Mencari sesuatu?"
        underlineColorAndroid="transparent"
      />
      <Entypo name="magnifying-glass" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginTop: 10,
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e3e4e9",
    height: 40,
    borderRadius: 15,
    margin: 10,
    padding: 8,
  },
});

export default SearchBar;
