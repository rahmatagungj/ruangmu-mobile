import React from "react";
import ContainerBar from "../Components/ContainerBar";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
  Linking,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Setting = () => {
  const RenderItem = ({ title, action, onPress }) => {
    return (
      <TouchableOpacity underlayColor="transparent" onPress={onPress}>
        <FlexBeetween>
          <Text>{title}</Text>
          <Action>{action}</Action>
        </FlexBeetween>
      </TouchableOpacity>
    );
  };

  const handleOpenSettings = () => {
    if (Platform.OS === "ios") {
      Linking.openURL("app-settings:");
    } else {
      Linking.openSettings();
    }
  };

  const ShowMessage = (title, body, buttonText, onPress) => {
    Alert.alert(title, body, [
      {
        text: buttonText,
        onPress: () => onPress,
      },
    ]);
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      ShowMessage(
        "PEMBERITAHUAN",
        "Sampah data aplikasi berhasil dibersihkan.",
        "TUTUP",
        null
      );
    } catch (e) {
      ShowMessage(
        "PEMBERITAHUAN",
        "Sampah data aplikasi gagal dibersihkan.",
        "TUTUP",
        null
      );
    }
  };

  const HandleDeleteTrash = () => {
    clearStorage();
  };

  return (
    <>
      <ContainerBar
        icon={<FontAwesome name="gear" size={24} color="black" />}
        text="Pengaturan"
      />
      <Container>
        <RenderItem
          title="Hapus Sampah"
          action={
            <MaterialCommunityIcons name="trash-can" size={20} color="black" />
          }
          onPress={() => HandleDeleteTrash()}
        />
        <RenderItem
          title="Periksa Pembaruan"
          action={
            <MaterialIcons name="system-update" size={20} color="black" />
          }
          onPress={() =>
            ShowMessage(
              "PEMBERITAHUAN",
              "Anda sudah menggunakan versi aplikasi terbaru.",
              "TUTUP",
              null
            )
          }
        />
        <RenderItem
          title="Izin Pemberitahuan"
          action={
            <MaterialIcons name="notifications" size={20} color="black" />
          }
          onPress={() => handleOpenSettings()}
        />
      </Container>
    </>
  );
};

const Container = styled.View`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const FlexBeetween = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Action = styled.View`
  padding: 10px;
`;

export default Setting;
