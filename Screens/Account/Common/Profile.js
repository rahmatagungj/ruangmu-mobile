import React from "react";
import ContainerBar from "../Components/ContainerBar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Profile = () => {
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
      <Divier />
      <ContainerBar
        icon={<MaterialCommunityIcons name="account" size={24} color="black" />}
        text="Profil"
      />
      <Container>
        <RenderItem
          title="Ubah Bio"
          action={
            <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
          }
          onPress={null}
        />
      </Container>
    </>
  );
};

const Divier = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;

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

export default Profile;
