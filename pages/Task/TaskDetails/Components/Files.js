import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "../../../../Components/Button";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

const Files = () => {
  return (
    <ContainerSubmitTask>
      <HeaderSubmit>
        <FontAwesome name="calendar-check-o" size={20} color="#073C64" />
        <TitleSubmit>Tugas Anda</TitleSubmit>
      </HeaderSubmit>
      <ButtonSubmit title="Unggah Berkas" />
    </ContainerSubmitTask>
  );
};

const ContainerSubmitTask = styled.View`
  height: auto;
  border-radius: 15px;
  padding: 10px;
  margin-top: 10px;
  border: 2px solid #6c6fc6;
  border-radius: 15px;
`;

const HeaderSubmit = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const TitleSubmit = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  margin-left: 5px;
  color: #333333;
`;

const ButtonSubmit = styled(Button)`
  background: #073c64;
  border-radius: 5px;
`;

export default Files;
