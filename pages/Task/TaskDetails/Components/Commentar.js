import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import styled from "styled-components/native";
import { Button } from "../../../../Components/Button";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const Commentar = () => {
  return (
    <ContainerCommentar>
      <HeaderCommentar>
        <FontAwesome5 name="user-alt" size={20} color="#073C64" />
        <TitleCommentar>Komentar Pribadi</TitleCommentar>
      </HeaderCommentar>
      <Comment>
        <UserPicture source={require("../../../../assets/user.png")} />
        <TextInputCommentar placeholder="Ketik pesan disini ..." />
        <ButtonCommentar
          title={<FontAwesome name="send" size={20} color="white" />}
        />
      </Comment>
    </ContainerCommentar>
  );
};

const ContainerCommentar = styled.View`
  height: auto;
  border-radius: 15px;
  padding: 10px;
  margin-top: 10px;
  border: 2px solid #6c6fc6;
  border-radius: 15px;
`;

const HeaderCommentar = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const TitleCommentar = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  margin-left: 5px;
  color: #333333;
`;

const Comment = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const UserPicture = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 100px;
`;

const TextInputCommentar = styled.TextInput`
  margin-left: 10px;
  background: #e2e2e2;
  border-radius: 15px;
  padding: 10px;
  height: 40px;
  width: 70%;
`;

const ButtonCommentar = styled(Button)`
  background: #073c64;
  border-radius: 15px;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
`;

export default Commentar;
