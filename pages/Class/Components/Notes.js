import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Notes = () => {
  return (
    <Views>
      <TitleNote>Catatan</TitleNote>
      <ContainerNote>
        <Text>Tidak ada catatan.</Text>
      </ContainerNote>
    </Views>
  );
};

const Views = styled.View`
  padding: 15px;
`;

const TitleNote = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 24px;
  color: #333333;
`;

const ContainerNote = styled.View`
  min-height: 100px;
  height: auto;
  background: #c4c4c4;
  border-radius: 15px;
  padding: 10px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export default Notes;
