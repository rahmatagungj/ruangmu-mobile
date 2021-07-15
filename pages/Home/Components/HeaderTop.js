import React from "react";
import { Text, View, Image } from "react-native";
import styled from "styled-components/native";

import Svg, { Path } from "react-native-svg";

const HeaderTop = () => {
  const date = new Date();
  let hours = date.getHours();
  let statusTime =
    hours < 12 ? "Pagi" : hours <= 18 && hours >= 12 ? "Sore" : "Malam";

  let name = "Rahmat Agung Julians".split(" ")[0];
  let status = "Mahasiswa";

  return (
    <View>
      <Svg
        height="60%"
        width="100%"
        viewBox="0 0 1440 320"
        style={{ position: "absolute", top: 70, left: 0 }}
        preserveAspectRatio="xMinYMin slice"
      >
        <Path
          fill="#b12c30"
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,229.3C960,213,1056,171,1152,176C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </Svg>
      <HeaderTops>
        <GroupOne>
          <SeparateOne>
            <TextGreetings>Halo, Selamat {statusTime}</TextGreetings>
            <TextName>{name}</TextName>
            <TextStatus>{status}</TextStatus>
          </SeparateOne>
          <UserPicture source={require("../../../assets/user.png")} />
        </GroupOne>
      </HeaderTops>
    </View>
  );
};

const HeaderTops = styled.View`
  background-color: #b12c30;
  padding: 10px;
  color: white;
  min-height: 120px;
  margin-bottom: 70px;
`;

const GroupOne = styled.View`
  width: 100%;
  margin-top: 10px;
  flex-direction: row;
`;

const SeparateOne = styled.View`
  max-width: 73%;
`;

const TextGreetings = styled.Text`
  color: #f0f0f0;
  font-size: 14px;
`;

const TextName = styled.Text`
  font-size: 33px;
  font-weight: bold;
  color: #ffffff;
`;

const UserPicture = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  position: absolute;
  right: 10px;
`;

const TextStatus = styled.Text`
  font-size: 13px;
  color: #ffffff;
`;

export default HeaderTop;
