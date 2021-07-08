import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Screen>
      <HeaderTop>
        <GroupOne>
          <SeparateOne>
            <TextGreetings>Halo,</TextGreetings>
            <TextName>Rahmat AJ.</TextName>
          </SeparateOne>
        </GroupOne>
      </HeaderTop>
      <StatusBar style="auto" />

      <ListClass>
        <ClassOne></ClassOne>
        <ClassTwo></ClassTwo>
        <ClassThere></ClassThere>
        <ClassFour></ClassFour>
      </ListClass>
    </Screen>
  );
}

function jobScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Halaman Tugas!</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Halaman Notifikasi!</Text>
    </View>
  );
}

function AccountScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Halaman Akun!</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return (
                <Ionicons
                  name={focused ? "ios-home" : "ios-home-outline"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Job") {
              return (
                <Ionicons
                  name={focused ? "ios-briefcase" : "ios-briefcase-outline"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Notification") {
              return (
                <FontAwesome
                  name={focused ? "bell" : "bell-o"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Account") {
              return (
                <FontAwesome
                  name={focused ? "user" : "user-o"}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Job" component={jobScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Screen = styled.View`
  font-variant: small-caps;
  margin-top: 25px;
  background-color: #f6f9fd;
  height: 100%;
`;

const HeaderTop = styled.View`
  background-color: #b91515;
  padding: 10px;
  color: white;
  background: #b91515;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  min-height: 411px;
`;

const GroupOne = styled.View`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  width: 100%;
`;

const SeparateOne = styled.View`
  flex-grow: 1;
`;

const TextGreetings = styled.Text`
  color: #f0f0f0;
  font-size: 20px;
`;

const TextName = styled.Text`
  font-size: 25px;
  color: #ffffff;
`;

const ListClass = styled.View`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ClassOne = styled.View`
  background: #df3620;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  height: 130px;
  width: 130px;
  padding: 10px;
  margin-top: 10px;
`;

const ClassTwo = styled.View`
  background: #7782fd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  height: 130px;
  width: 130px;
  padding: 10px;
  margin-top: 10px;
`;

const ClassThere = styled.View`
  background: #f8b748;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  height: 130px;
  width: 130px;
  padding: 10px;
  margin-top: 10px;
`;

const ClassFour = styled.View`
  background: #02b078;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  height: 130px;
  width: 130px;
  padding: 10px;
  margin-top: 10px;
`;

export default App;
