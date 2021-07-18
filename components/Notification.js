import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import { Platform, Alert, Linking, View, Text } from "react-native";
import BasicModal from "./Modal/BasicModal";
import firebase from "../Firebases/Firebase";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function addNotificationToken(token, setIsNotificationDone) {
  const userDocRef = await firebase.firestore().collection("users").doc(token);
  const doc = await userDocRef.get();
  const nowDate = new Date().getMonth();
  if (doc.exists) {
    if (doc.data().lastUsed !== nowDate) {
      userDocRef.set({
        notificationToken: token,
        lastUsed: new Date().getMonth(),
      });
    }
  } else {
    userDocRef.set({
      notificationToken: token,
      lastUsed: new Date().getMonth(),
    });
  }
  setIsNotificationDone(false);
}

export default function Notification({
  isNotificationDone,
  setIsNotificationDone,
}) {
  const notificationListener = useRef();
  const responseListener = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then((data) => {
        if (!data) {
          setVisible(true);
        } else {
          addNotificationToken(data, setIsNotificationDone);
        }
      })
      .catch((e) => null);

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        null;
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        null;
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <BasicModal
      isVisible={visible}
      title="Pemberitahuan"
      buttonLeftText="Tutup"
      onPressButtonLeft={() => setVisible(false)}
      buttonRightText="Lanjutkan"
      onPressButtonRight={() => Linking.openSettings()}
    >
      <Text>
        Aplikasi membutuhkan izin untuk mengirim layanan pemberitahuan.
      </Text>
    </BasicModal>
  );
}

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
