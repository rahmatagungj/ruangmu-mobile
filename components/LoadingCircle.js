import React from "react";
import { View, ActivityIndicator } from "react-native";
import styled from "styled-components/native";

const LoadingCircle = () => {
  return (
    <ContainerLoading>
      <ActivityIndicator size="large" color="#aaaaaa" />
    </ContainerLoading>
  );
};

const ContainerLoading = styled.View`
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default LoadingCircle;
