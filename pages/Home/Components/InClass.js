import React, { useState, useEffect } from "react";
import { View, TouchableHighlight, Text, Image } from "react-native";
import styled from "styled-components/native";
import ClassScreen from "../../Class/ClassScreen";
import * as Animatable from "react-native-animatable";

const InClass = ({ title, color, name, picture, navigation, currentDelay }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  return (
    <Animatable.View
      animation="slideInUp"
      iterationCount={1}
      delay={currentDelay}
    >
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() =>
          navigation.push("ClassScreen", {
            title: title,
            picture: picture,
            color: color,
            name: name,
          })
        }
      >
        <ClassContainer color={color}>
          <TitleClass>{title}</TitleClass>
          <DetailClass>
            <Teacher>
              <Avatars source={{ uri: picture }} />
              <Name>{name}</Name>
            </Teacher>
            <TeacherBackground />
          </DetailClass>
        </ClassContainer>
      </TouchableHighlight>
    </Animatable.View>
  );
};

const ClassContainer = styled.View`
  background: ${(props) => props.color || "#707070"};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  min-height: 100px;
  min-width: 150px;
  padding: 10px;
  margin-top: 20px;
  elevation: 4;
  position: relative;
`;

const TitleClass = styled.Text`
  max-width: 100px;
  color: white;
  font-size: 13px;
`;

const TeacherBackground = styled.View`
  background: rgba(0, 0, 0, 0.3);
  opacity: 0.4;
  height: 45px;
  position: absolute;
  bottom: 0px;
  min-width: 150px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const DetailClass = styled.View`
  height: 45px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  align-content: center;
`;

const Avatars = styled.Image`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 6px;
  width: 37px;
  height: 37px;
  border-radius: 100px;
`;

const Teacher = styled.View`
  flex-direction: row;
  align-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
`;

const Name = styled.Text`
  color: white;
  margin-left: 3px;
  font-size: 10px;
  max-width: 85px;
`;

export default InClass;
