import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import { Platform, Alert, Linking, View } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App({ titles, bodys, datas, secondss }) {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const ShowNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: titles,
        body: bodys,
        data: { data: datas },
      },
      trigger: { seconds: secondss, repeats: false },
    });
  };

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then((token) => {
        if (token) {
          setExpoPushToken(token);
          notificationListener.current =
            Notifications.addNotificationReceivedListener((notification) => {
              setNotification(notification);
            });

          responseListener.current =
            Notifications.addNotificationResponseReceivedListener(
              (response) => {
                null;
              }
            );
        }
      })
      .catch((e) => {
        Alert.alert(
          "ERROR",
          "Terjadi masalah saat memeriksa izin pemberitahuan Anda, coba lagi nanti."
        );
      });

    ShowNotification();
    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return <View></View>;
}

const handleOpenSettings = () => {
  if (Platform.OS === "ios") {
    Linking.openURL("app-settings:");
  } else {
    Linking.openSettings();
  }
};

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      Alert.alert(
        "PEMBERITAHUAN",
        "Harap aktifkan izin pemberitahuan aplikasi di pengaturan Anda.",
        [
          {
            text: "AKTIFKAN",
            onPress: () => handleOpenSettings(),
          },
        ]
      );
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#2e1fff7b",
    });
  }

  return token;
}
