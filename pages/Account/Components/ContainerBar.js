import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const ContainerBar = ({ icon, text }) => {
  return (
    <Container>
      <Icons>{icon}</Icons>
      <Title>{text}</Title>
    </Container>
  );
};

const Container = styled.View`
  background: #eaeaea;
  border-radius: 10px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const Icons = styled.View``;

const Title = styled.Text`
  margin-left: 10px;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #333333;
`;

export default ContainerBar;
