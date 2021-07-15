import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import styled from "styled-components/native";
import { Button } from "../../../../Components/Button";
import { FontAwesome } from "@expo/vector-icons";

const Commentar = () => {
  return (
    <ContainerCommentar>
      <HeaderCommentar>
        <TitleCommentar>Komentar</TitleCommentar>
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
  margin-top: 20px;
`;

const HeaderCommentar = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const TitleCommentar = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
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
  background: #f1f4f9;
  border-radius: 15px;
  padding: 10px;
  height: 40px;
  width: 70%;
`;

const ButtonCommentar = styled(Button)`
  background: #4cbfb9;
  border-radius: 15px;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
`;

export default Commentar;
