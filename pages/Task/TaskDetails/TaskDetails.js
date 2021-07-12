import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Commentar from "./Components/Commentar";
import Files from "./Components/Files";

const TaskDetails = ({ route, navigation }) => {
  const { name, teacher, details, picture, date, deadline } = route.params;

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <Views>
        <Header>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="ios-chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <FlexRow>
            <TeacherPicture source={{ uri: picture }} />
            <TeacherName>{teacher}</TeacherName>
          </FlexRow>
        </Header>
        <ViewsTask>
          <TaskTitle>{name}</TaskTitle>
          <DateTask>Ditambahkan pada {date}</DateTask>
          <RightView>
            <DeadlineTask>Tenggal: {deadline}</DeadlineTask>
          </RightView>
          <ContainerDetails>
            <DetailsTask>{details}</DetailsTask>
          </ContainerDetails>
          <Files />
          <Commentar />
        </ViewsTask>
      </Views>
    </ScrollView>
  );
};

const Views = styled.View`
  flex: 1;
  margin-bottom: 100px;
`;

const Header = styled.View`
  flex-direction: row;
  padding: 10px;
`;

const ViewsTask = styled.View`
  padding: 15px;
`;

const TaskTitle = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 21px;

  color: #000000;
`;

const RightView = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const DeadlineTask = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  text-align: justify;
  right: 0px;
  color: #7d7c7c;
`;

const TeacherName = styled.Text`
  font-size: 15px;
  margin-left: 10px;
  font-weight: bold;
`;

const DateTask = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  text-align: justify;

  color: #000000;
`;

const DetailsTask = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 13px;
  text-align: justify;
  color: #000000;
  margin-vertical: 10px;
`;

const TeacherPicture = styled.Image`
  width: 30px;
  height: 30px;
`;

const FlexRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ContainerDetails = styled.View`
  height: auto;
  background: #e7e7e7;
  border-radius: 15px;
  padding: 10px;
  margin-top: 10px;
`;

export default TaskDetails;
