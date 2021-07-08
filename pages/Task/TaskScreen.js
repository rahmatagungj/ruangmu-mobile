import React from "react";
import { View, Text, Button } from "react-native";

const TaskScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Halaman Tugas!</Text>
      <Button
        onPress={() => alert("Daftar tugas mahasiswa")}
        title="Lihat Tugas"
      />
    </View>
  );
};

export default TaskScreen;
