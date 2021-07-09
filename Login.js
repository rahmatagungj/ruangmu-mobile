import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import styled from "styled-components";
import StatusBar from "./components/StatusBar";
import { Button } from "./components/Button";

const Login = ({ navigation }) => {
  return (
    <ContainerCenter>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <Image source={require("./assets/logobar.png")} />
      <Divier />
      <ContainerForm>
        <FormNim
          placeholder="Nomor Induk Mahasiswa"
          underlineColorAndroid="transparent"
        />
      </ContainerForm>
      <ContainerForm>
        <FormPassword
          placeholder="Kata Sandi"
          underlineColorAndroid="transparent"
        />
      </ContainerForm>
      <Buttons title="Masuk" onPress={() => navigation.navigate("Home")} />
    </ContainerCenter>
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
`;

const FormPassword = styled.TextInput`
  min-width: 280px;
  height: 51px;
`;

export default Login;
