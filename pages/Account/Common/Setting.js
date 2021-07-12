import React from "react";
import ContainerBar from "../Components/ContainerBar";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const Setting = () => {
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
        icon={<FontAwesome name="gear" size={24} color="black" />}
        text="Pengaturan"
      />
      <Container>
        <RenderItem
          title="Hapus Sampah"
          action={
            <MaterialCommunityIcons name="trash-can" size={20} color="black" />
          }
          onPress={null}
        />
        <RenderItem
          title="Periksa Pembaruan"
          action={
            <MaterialIcons name="system-update" size={20} color="black" />
          }
          onPress={null}
        />
      </Container>
    </>
  );
};

const Container = styled.View`
  width: 90%;
  margin-left: 25px;
  margin-right: 25px;
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

export default Setting;
