import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Alert } from "react-native";

const SearchBar = () => {
  const [toSearch, setToSearch] = useState();

  const handleSearch = () => {
    if (toSearch) {
      Alert.alert("Pencarian", "Hasil pencarian tidak ditemukan.", [
        {
          text: "Tutup",
        },
      ]);
    }
  };

  return (
    <View style={styles.sectionStyle}>
      <TextInput
        style={{ flex: 1 }}
        placeholder="Mencari sesuatu?"
        underlineColorAndroid="transparent"
        returnKeyType="go"
        onChangeText={(text) => setToSearch(text)}
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Entypo name="magnifying-glass" size={24} color="black" />
      </TouchableOpacity>
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
