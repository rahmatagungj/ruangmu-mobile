import React, { useState, useEffect } from "react";
import { Text, View, Alert } from "react-native";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import HomeScreen from "./Pages/Home/HomeScreen";
import NotificationScreen from "./Pages/Notification/NotificationScreen";
import TaskScreen from "./Pages/Task/TaskScreen";
import AccountScreen from "./Pages/Account/AccountScreen";
import StatusBar from "./Components/StatusBar";
const Tab = createBottomTabNavigator();

function Home({ navigation }) {
  return (
    <>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <Tab.Navigator
        lazy={true}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Beranda") {
              return (
                <Ionicons
                  name={focused ? "ios-home" : "ios-home-outline"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Tugas") {
              return (
                <Ionicons
                  name={focused ? "ios-briefcase" : "ios-briefcase-outline"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Notifikasi") {
              return (
                <FontAwesome
                  name={focused ? "bell" : "bell-o"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Akun") {
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
          activeTintColor: "white",
          inactiveTintColor: "#dddddd",
          keyboardHidesTabBar: true,
          style: {
            backgroundColor: "#073C64",
            paddingBottom: 3,
            padding: 10,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            position: "absolute",
          },
        }}
      >
        <Tab.Screen name="Beranda" component={HomeScreen} />
        <Tab.Screen name="Tugas" component={TaskScreen} />
        <Tab.Screen name="Notifikasi" component={NotificationScreen} />
        <Tab.Screen name="Akun" component={AccountScreen} />
      </Tab.Navigator>
    </>
  );
}

export default Home;
