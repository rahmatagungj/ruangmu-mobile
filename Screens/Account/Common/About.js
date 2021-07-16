import React from "react";
import ContainerBar from "../Components/ContainerBar";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const About = () => {
  const RenderItem = ({ title, action, onPress }) => {
    return (
      <TouchableOpacity underlayColor="transparent" onPress={onPress}>
        <FlexBeetween>
          <Text>{title}</Text>
          <Action>{action}</Action>
        </FlexBeetween>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <ContainerBar
        icon={
          <Ionicons name="ios-information-circle" size={25} color="black" />
        }
        text="Tentang"
      />
      <Container>
        <RenderItem
          title="Versi"
          action={<Text>0.0.2 Beta</Text>}
          onPress={null}
        />
        <RenderItem
          title="Pembaruan Data Terakhir"
          action={<Text>11 Juli 2021</Text>}
          onPress={null}
        />
      </Container>
    </>
  );
};

const Container = styled.View`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const FlexBeetween = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Action = styled.View`
  padding: 10px;
`;

export default About;
