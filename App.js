import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Login from "./Login";
import { View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import styled from "styled-components/native";
import TaskDetails from "./Pages/Task/TaskDetails/TaskDetails";
import ClassScreen from "./Pages/Class/ClassScreen";
import NotificationContext from "./Context/NotificationContext";
import TaskContext from "./Context/TaskContext";
import DataUserContext from "./Context/DataUserContext";

const Stack = createStackNavigator();

const DEVMODE = true;

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

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [taskCount, setTaskCount] = useState(0);
  const [dataUser, setDataUser] = useState({});

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

  const onDone = () => {
    setShowRealApp(true);
  };

  if (showRealApp || DEVMODE) {
    return (
      <DataUserContext.Provider value={[dataUser, setDataUser]}>
        <NotificationContext.Provider
          value={[notificationCount, setNotificationCount]}
        >
          <TaskContext.Provider value={[taskCount, setTaskCount]}>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="TaskDetails"
                  component={TaskDetails}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ClassScreen"
                  component={ClassScreen}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </TaskContext.Provider>
        </NotificationContext.Provider>
      </DataUserContext.Provider>
    );
  } else {
    return (
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
      />
    );
  }
};

const Views = styled.View`
  background: ${(props) => props.background};
  justify-content: center;
  align-items: center;
  flex: 1;
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

const ButtonContainer = styled.View`
  padding: 5px;
  margin-top: 5px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;

export default App;
