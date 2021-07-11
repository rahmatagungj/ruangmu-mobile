import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import styled from "styled-components/native";
import StatusBar from "./Components/StatusBar";
import { Button } from "./Components/Button";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");

  const showAlertLogin = () => {
    Alert.alert("Pemberitahuan", "Nim dan Password wajib di isi!", [
      { text: "OK", onPress: () => null },
    ]);
  };

  const handleLogin = () => {
    if (nim.length > 0 && password.length > 0) {
      navigation.replace("Home");
    } else {
      showAlertLogin();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ContainerCenter>
        <StatusBar backgroundColor="#F2F2F2" barStyle="dark-content" />
        <Logo source={require("./assets/logobar.png")} />
        <Divier />
        <ContainerForm>
          <FontAwesome name="user" size={20} color="black" />
          <FormNim
            placeholder="Nomor Induk Mahasiswa"
            underlineColorAndroid="transparent"
            onChangeText={(text) => setNim(text)}
          />
        </ContainerForm>
        <ContainerForm>
          <MaterialIcons name="vpn-key" size={20} color="black" />
          <FormPassword
            placeholder="Kata Sandi"
            underlineColorAndroid="transparent"
            onChangeText={(text) => setPassword(text)}
          />
        </ContainerForm>
        <Buttons title="Masuk" onPress={handleLogin} />
      </ContainerCenter>
    </KeyboardAvoidingView>
  );
};

const Divier = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;
const ContainerCenter = styled.View`
  padding: 10px;
  align-items: center;
  margin: auto;
`;

const Buttons = styled(Button)`
  background: #073c64;
  min-width: 183px;
  margin-top: 20px;
  border-radius: 15px;
`;

const ContainerForm = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #e3e4e9;
  height: 40px;
  border-radius: 15px;
  margin: 5px;
  padding: 8px;
`;

const FormNim = styled.TextInput`
  min-width: 280px;
  height: 51px;
  margin-left: 5px;
`;

const FormPassword = styled.TextInput`
  min-width: 275px;
  height: 51px;
  margin-left: 5px;
`;

const Logo = styled.Image`
  min-width: 246px;
  min-height: 62px;
`;

export default Login;