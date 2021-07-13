import React from "react";
import Constants from "expo-constants";
import AnimatedSplash from "react-native-animated-splash-screen";
import AppIntroSlider from "react-native-app-intro-slider";
import styled from "styled-components/native";
import { View, Text, Image } from "react-native";

const slides = [
  {
    key: "one",
    title: "SELAMAT DATANG",
    text: "DI RUANGMU MOBILE PLATFORM KULIAH \n STKIP MUHAMMADIYAH KUNINGAN",
    image: require("./assets/1.png"),
    backgroundColor: "#bd3725",
  },
  {
    key: "two",
    title: "CEPAT DAN MUDAH",
    text: "RuangMu Mobile mengakomodasi proses pembelajaran dari mulai proses dan evaluasi. Platform Kuliah dapat digunakan untuk pembelajaran daring, blended/hybrid dan sebagai suplement pembelajaran.",
    image: require("./assets/2.png"),
    backgroundColor: "#7782FD",
  },
];

const renderItem = ({ item }) => {
  return (
    <Views background={item.backgroundColor}>
      <Images source={item.image} />
      <Title>{item.title}</Title>
      <Description>{item.text}</Description>
    </Views>
  );
};

const renderNextButton = () => {
  return (
    <ButtonContainer>
      <ButtonText>Lanjut</ButtonText>
    </ButtonContainer>
  );
};

const renderDoneButton = () => {
  return (
    <ButtonContainer>
      <ButtonText>Selesai</ButtonText>
    </ButtonContainer>
  );
};

const AppIntro = ({ isLoaded, onDone }) => {
  return Constants.isDevice ? (
    <AnimatedSplash
      translucent={true}
      isLoaded={isLoaded}
      logoImage={require("./assets/logobar.png")}
      backgroundColor={"#ffffff"}
      logoHeight={246}
      logoWidth={246}
    >
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
      />
    </AnimatedSplash>
  ) : (
    onDone()
  );
};

const Views = styled.View`
  background: ${(props) => props.background};
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ButtonContainer = styled.View`
  padding: 5px;
  margin-top: 5px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;

const Images = styled.Image`
  width: 300px;
  height: 300px;
`;

const Description = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 80%;
`;

const Title = styled.Text`
  font-size: 20px;
  color: white;
  margin-top: 20px;
  max-width: 70%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default AppIntro;
