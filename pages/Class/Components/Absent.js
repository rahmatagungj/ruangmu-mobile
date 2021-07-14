import React, { useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styled from "styled-components/native";
import { Ionicons, Feather } from "@expo/vector-icons";

const Absent = ({ sheetRef, isAbsent, setIsAbsent }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAbsent = () => {
    if (!isAbsent) {
      setIsLoading(true);
    }
    setTimeout(() => {
      setIsAbsent(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Views>
      <ContainerAbsent>
        <Sesions>ABSEN PERTEMUAN 6</Sesions>
        <TouchableHighlight underlayColor="transparent" onPress={handleAbsent}>
          <ContrainerAction>
            {isLoading ? (
              <Feather
                name="loader"
                size={50}
                color="white"
                style={{ marginTop: -20 }}
              />
            ) : (
              <Ionicons
                name={isAbsent ? "checkmark" : "hand-right-sharp"}
                size={50}
                color="white"
                style={{ marginTop: -20 }}
              />
            )}
            <AbsentBackground />
            <AbsentStatus>
              {isLoading ? "Memuat" : isAbsent ? "Sudah Hadir" : "Belum Hadir"}
            </AbsentStatus>
          </ContrainerAction>
        </TouchableHighlight>
      </ContainerAbsent>
    </Views>
  );
};

const Views = styled.View`
  padding: 15px;
`;

const ContainerAbsent = styled.View`
  height: auto;
  background: #c4c4c4;
  border-radius: 15px;
  padding: 10px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const ContrainerAction = styled.View`
  width: 100px;
  height: 100px;
  background: #54e97e;
  border-radius: 10px;
  position: relative;
  padding: 10px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  elevation: 4;
`;

const Sesions = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  width: 50%;
  color: #2d3876;
`;

const AbsentBackground = styled.View`
  background: rgba(0, 0, 0, 0.3);
  opacity: 0.4;
  height: 25px;
  position: absolute;
  bottom: 0px;
  min-width: 100px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const AbsentStatus = styled.Text`
  color: white;
  margin-left: 3px;
  font-size: 10px;
  max-width: 85px;
  position: absolute;
  bottom: 6px;
`;

export default Absent;
