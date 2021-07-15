import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Home from "./Home";
import Login from "./Login";
import TaskDetails from "./Pages/Task/TaskDetails/TaskDetails";
import ClassScreen from "./Pages/Class/ClassScreen";
import ChatScreen from "./Pages/Chat/ChatScreen";
import NotificationContext from "./Context/NotificationContext";
import TaskContext from "./Context/TaskContext";
import DataUserContext from "./Context/DataUserContext";
import DevModeContext from "./Context/DevModeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppIntro from "./AppIntro";
import { ModalPortal } from "react-native-modals";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StatusBar from "./Components/StatusBar";
import { SafeAreaView } from "react-native-safe-area-context";
import AllClassScreen from "./Pages/Class/AllClassScreen";

const Stack = createStackNavigator();

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [taskCount, setTaskCount] = useState(0);
  const [dataUser, setDataUser] = useState({});
  const [devMode, setDevMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFirst, setIsFirst] = useState(true);

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("isFirstUse", "yes").then((e) => {});
    } catch (e) {}
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("isFirstUse");
      if (jsonValue != null) {
        setIsFirst(false);
      }
    } catch (e) {
      // error reading value
      setIsFirst(false);
    }
  };

  const onDone = () => {
    if (isFirst) {
      storeData();
    }
    setShowRealApp(true);
  };

  useEffect(() => {
    getData();
    if (!isLoaded) {
      setTimeout(() => {
        setIsLoaded(true);
      }, 2000);
    }
    return () => {
      setIsLoaded(false);
    };
  }, []);

  if (showRealApp) {
    return (
      <DevModeContext.Provider value={[devMode, setDevMode]}>
        <DataUserContext.Provider value={[dataUser, setDataUser]}>
          <NotificationContext.Provider
            value={[notificationCount, setNotificationCount]}
          >
            <TaskContext.Provider value={[taskCount, setTaskCount]}>
              <SafeAreaProvider>
                <NavigationContainer>
                  <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen
                      name="Login"
                      component={Login}
                      options={{
                        headerShown: false,
                      }}
                    />
                    <Stack.Screen
                      name="Home"
                      component={Home}
                      options={{
                        headerShown: false,
                        cardOverlayEnabled: true,
                        ...TransitionPresets.ScaleFromCenterAndroid,
                      }}
                    />
                    <Stack.Screen
                      name="TaskDetails"
                      component={TaskDetails}
                      options={{
                        headerShown: false,
                      }}
                    />
                    <Stack.Screen
                      name="ClassScreen"
                      component={ClassScreen}
                      options={{
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                      }}
                    />
                    <Stack.Screen
                      name="ChatScreen"
                      component={ChatScreen}
                      options={{
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                      }}
                    />
                    <Stack.Screen
                      name="AllClassScreen"
                      component={AllClassScreen}
                      options={{
                        headerShown: false,
                        ...TransitionPresets.RevealFromBottomAndroid,
                      }}
                    />
                  </Stack.Navigator>
                  <ModalPortal />
                </NavigationContainer>
              </SafeAreaProvider>
            </TaskContext.Provider>
          </NotificationContext.Provider>
        </DataUserContext.Provider>
      </DevModeContext.Provider>
    );
  } else {
    return (
      <>
        {isFirst ? (
          <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
              <StatusBar hidden={true} />
              <AppIntro isLoaded={isLoaded} onDone={onDone} />
            </SafeAreaView>
          </SafeAreaProvider>
        ) : (
          onDone()
        )}
      </>
    );
  }
};

export default App;
