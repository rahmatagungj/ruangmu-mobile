import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styled from "styled-components/native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import Absent from "./Components/Absent";
import Notes from "./Components/Notes";
import Files from "./Components/Files";
import { SafeAreaView } from "react-native-safe-area-context";
import StatusBar from "../../Components/StatusBar";
import { useIsFocused } from "@react-navigation/native";

const ClassScreen = ({ route, navigation }) => {
  const { title, picture, color, name } = route.params;
  const [isAbsent, setIsAbsent] = useState(false);

  const isFocused = useIsFocused();

  const handleChatTeacher = () => {
    navigation.navigate("ChatScreen", {
      title: title,
      picture: picture,
      color: color,
      name: name,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {isFocused && (
        <StatusBar backgroundColor={color} barStyle="light-content" />
      )}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Views>
          <ContainerTop color={color}>
            <View>
              <TeacherPicture source={{ uri: picture }} />
              <CircleIcon>
                <TouchableOpacity onPress={() => handleChatTeacher()}>
                  <Entypo name="chat" size={18} color="white" />
                </TouchableOpacity>
              </CircleIcon>
            </View>
            <Container>
              <TitleClass>{title}</TitleClass>
              <Divier />
              <TeacherName>{name}</TeacherName>
            </Container>
          </ContainerTop>
          <Absent isAbsent={isAbsent} setIsAbsent={setIsAbsent} />
          <Notes />
          <Files />
        </Views>
      </ScrollView>
    </SafeAreaView>
  );
};

const Views = styled.View`
  flex: 1;
  margin-bottom: 100px;
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
  font-size: 20px;
  color: #ffffff;
  width: 100%;
  line-height: 30px;
  margin-top: 10px;
  text-align: center;
`;

const TeacherName = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
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

const CircleIcon = styled.View`
  border-radius: 100px;
  padding: 5px;
  background: #e9bf33;
  position: absolute;
  right: 5px;
  bottom: 0px;
`;

export default ClassScreen;
