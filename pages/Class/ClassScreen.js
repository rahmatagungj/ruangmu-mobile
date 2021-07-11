import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styled from "styled-components/native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import Absent from "./Components/Absent";
import Notes from "./Components/Notes";
import Files from "./Components/Files";

const ClassScreen = ({ route, navigation }) => {
  const { title, picture, color, name } = route.params;

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <Views>
        <Header color={color}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="ios-chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <Entypo name="chat" size={24} color="white" />
        </Header>
        <ContainerTop color={color}>
          <TeacherPicture
            source={{ uri: picture }}
            defaultSource={require("../../assets/defaultUser.png")}
          />
          <Container>
            <TitleClass>{title}</TitleClass>
            <Divier />
            <TeacherName>{name}</TeacherName>
          </Container>
        </ContainerTop>
        <Absent />
        <Notes />
        <Files />
      </Views>
    </ScrollView>
  );
};

const Views = styled.View`
  flex: 1;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background: ${(props) => props.color};
`;

const ContainerTop = styled.View`
  background: ${(props) => props.color};
  padding: 10px;
  align-items: center;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  margin-bottom: 10px;
`;

const Container = styled.View`
  margin-left: 10px;
  margin-right: 10px;
  align-items: center;
  margin-bottom: 10px;
`;

const TitleClass = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  color: #ffffff;
  width: 100%;
  line-height: 30px;
  margin-top: 10px;
`;

const TeacherName = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  width: 100%;
  align-items: center;
`;

const TeacherPicture = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;

const Divier = styled.View`
  width: 153px;
  height: 4px;
  background: #c4c4c4;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default ClassScreen;
