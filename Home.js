import React, { useEffect, useContext } from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import HomeScreen from "./Pages/Home/HomeScreen";
import NotificationScreen from "./Pages/Notification/NotificationScreen";
import TaskScreen from "./Pages/Task/TaskScreen";
import AccountScreen from "./Pages/Account/AccountScreen";
import DataUserContext from "./Context/DataUserContext";
import NotificationContext from "./Context/NotificationContext";
import TaskContext from "./Context/TaskContext";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import styled from "styled-components/native";

const Tab = AnimatedTabBarNavigator();

function Home({ route, navigation }) {
  const [dataUser, setDataUser] = useContext(DataUserContext);
  const [notificationCount, setNotificationCount] =
    useContext(NotificationContext);
  const [taskCount, setTaskCount] = useContext(TaskContext);

  useEffect(() => {
    setNotificationCount(route.params.notificationCount);
    setTaskCount(route.params.taskCount);
    return () => {};
  }, []);

  return (
    <>
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
                <>
                  <Ionicons
                    name={focused ? "ios-briefcase" : "ios-briefcase-outline"}
                    size={size}
                    color={color}
                  />
                  {taskCount > 0 && (
                    <InnerContainer>
                      <BadgeTxt>{taskCount}</BadgeTxt>
                    </InnerContainer>
                  )}
                </>
              );
            } else if (route.name === "Notifikasi") {
              return (
                <>
                  <FontAwesome
                    name={focused ? "bell" : "bell-o"}
                    size={size}
                    color={color}
                  />
                  {notificationCount > 0 && (
                    <InnerContainer>
                      <BadgeTxt>{notificationCount}</BadgeTxt>
                    </InnerContainer>
                  )}
                </>
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
          activeTintColor: "#ffffff",
          inactiveTintColor: "#dddddd",
          activeBackgroundColor: "#eec749",
        }}
        appearance={{
          tabBarBackground: "#073C64",
          floating: true,
          tabButtonLayout: "horizontal",
          dotSize: "medium",
          whenActiveShow: "label-only",
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

const InnerContainer = styled.View`
  position: absolute;
  right: 10px;
  top: 2px;
  background-color: #ee3e3e;
  border-radius: 8px;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

const BadgeTxt = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
`;

export default Home;
