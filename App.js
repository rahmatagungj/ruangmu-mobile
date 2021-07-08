import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Button, Alert } from "react-native";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Home from "./pages/Home/Home";

const Tab = createBottomTabNavigator();
const { useEffect } = React;

function jobScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Halaman Tugas!</Text>
      <Button
        onPress={() => alert("Daftar tugas mahasiswa")}
        title="Lihat Tugas"
      />
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
  useEffect(() => {
    // Alert.alert(
    //   "Pemberitahuan",
    //   "Aplikasi ini sedang dalam tahap pengembangan, jika memiliki ide atau kesalahan pada aplikasi harap hubungi pengembang.",
    //   [
    //     {
    //       text: "Batal",
    //       onPress: () => exit(),
    //       style: "cancel",
    //     },
    //     { text: "OK", onPress: () => console.log("OK Pressed") },
    //   ]
    // );
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
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
          style: {
            backgroundColor: "#073C64",
            paddingBottom: 3,
            padding: 10,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          },
        }}
      >
        <Tab.Screen name="Beranda" component={Home} />
        <Tab.Screen name="Tugas" component={jobScreen} />
        <Tab.Screen name="Notifikasi" component={NotificationScreen} />
        <Tab.Screen name="Akun" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
