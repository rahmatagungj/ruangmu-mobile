import React, { useState, useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Home from "./Home";
import Login from "./Login";
import TaskDetails from "./Screens/Task/TaskDetails/TaskDetails";
import ClassScreen from "./Screens/Class/ClassScreen";
import ChatScreen from "./Screens/Chat/ChatScreen";
import NotificationContext from "./Contexts/NotificationContext";
import TaskContext from "./Contexts/TaskContext";
import DataUserContext from "./Contexts/DataUserContext";
import DevModeContext from "./Contexts/DevModeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppIntro from "./AppIntro";
import { ModalPortal } from "react-native-modals";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StatusBar from "./Components/StatusBar";
import { SafeAreaView } from "react-native-safe-area-context";
import AllClassScreen from "./Screens/Class/AllClassScreen";
import DataNotification from "./Contexts/DataNotification";
import DataApp from "./Contexts/DataApp";
import * as Analytics from "expo-firebase-analytics";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const Stack = createStackNavigator();

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [taskCount, setTaskCount] = useState(0);
  const [dataUser, setDataUser] = useState({});
  const [devMode, setDevMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const [dataNotification, setDataNotification] = useState([]);
  const [dataApp, setDataApp] = useState([]);
  const navigationRef = useRef();
  const routeNameRef = useRef();

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
    Analytics.setClientId(uuidv4());
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
      <DataApp.Provider value={[dataApp, setDataApp]}>
        <DevModeContext.Provider value={[devMode, setDevMode]}>
          <DataUserContext.Provider value={[dataUser, setDataUser]}>
            <DataNotification.Provider
              value={[dataNotification, setDataNotification]}
            >
              <NotificationContext.Provider
                value={[notificationCount, setNotificationCount]}
              >
                <TaskContext.Provider value={[taskCount, setTaskCount]}>
                  <SafeAreaProvider>
                    <NavigationContainer
                      ref={navigationRef}
                      onReady={() =>
                        (routeNameRef.current =
                          navigationRef.current.getCurrentRoute().name)
                      }
                      onStateChange={async () => {
                        const previousRouteName = routeNameRef.current;
                        const currentRouteName =
                          navigationRef.current.getCurrentRoute().name;

                        if (previousRouteName !== currentRouteName) {
                          await Analytics.setCurrentScreen(currentRouteName);
                        }

                        routeNameRef.current = currentRouteName;
                      }}
                    >
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
            </DataNotification.Provider>
          </DataUserContext.Provider>
        </DevModeContext.Provider>
      </DataApp.Provider>
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
