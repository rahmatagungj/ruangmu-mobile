import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.sectionStyle}>
      <Image source={require("../../../assets/magnify.png")} />
      <TextInput
        style={{ flex: 1 }}
        placeholder="Mencari sesuatu?"
        underlineColorAndroid="transparent"
      />
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
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center",
  },
});

export default SearchBar;
