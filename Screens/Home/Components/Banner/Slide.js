import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Slide = ({ item }) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={{ uri: item }} />
      <View style={styles.textView}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 30,
    height: height / 6,
    backgroundColor: "white",
    marginBottom: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#f1f4f9",
  },
  textView: {
    position: "absolute",
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: width - 30,
    height: height / 6,
    borderRadius: 10,
  },
  itemTitle: {
    color: "white",
    fontSize: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: "bold",
    elevation: 5,
  },
  itemDescription: {
    color: "white",
    fontSize: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default Slide;
