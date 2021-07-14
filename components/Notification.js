import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import { Platform, Alert, Linking, View, Text } from "react-native";
import BasicModal from "./Modal/BasicModal";

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
  const [visible, setVisible] = useState(false);

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
        if (!token) {
          setVisible(true);
        } else {
          setExpoPushToken(token);
        }
      })
      .catch((e) => null);

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        null;
      });

    ShowNotification();
    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View>
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
    </View>
  );
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
