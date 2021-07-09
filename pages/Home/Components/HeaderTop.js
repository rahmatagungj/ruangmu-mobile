import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import styled from "styled-components/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const HeaderTop = () => {
  return (
    <HeaderTops>
      <GroupOne>
        <SeparateOne>
          <TextGreetings>Halo,</TextGreetings>
          <TextName>Rahmat AJ.</TextName>
        </SeparateOne>
        <UserPicture source={require("../../../assets/user.png")} />
      </GroupOne>
      <Divier />
      <GroupTwo>
        <View>
          <OwnTitle>UJIAN TENGAH SEMESTER</OwnTitle>
          <OwnTitle>2021</OwnTitle>
        </View>
        <StatusUser
          source={require("../../../assets/status.png")}
          windowWidth={windowWidth}
        />
      </GroupTwo>
    </HeaderTops>
  );
};

const HeaderTops = styled.View`
  background-color: #ee3131;
  padding: 10px;
  color: white;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  min-height: 311px;
`;

const GroupOne = styled.View`
  width: 100%;
  margin-top: 10px;
  flex-direction: row;
`;

const SeparateOne = styled.View`
  width: 80%;
`;

const TextGreetings = styled.Text`
  color: #f0f0f0;
  font-size: 20px;
`;

const TextName = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
`;

const UserPicture = styled.Image`
  max-width: 60px;
  max-height: 60px;
  border-radius: 100px;
`;

const Divier = styled.View`
  width: 153px;
  height: 4px;
  background: #ffe68d;
  margin-top: 15px;
`;

const GroupTwo = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-content: center;
`;

const OwnTitle = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 700;
  max-width: 180px;
`;

const StatusUser = styled.Image``;

export default HeaderTop;
