import React, { useState, useContext, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  RefreshControl,
  ScrollView,
  Linking,
} from "react-native";
import styled from "styled-components/native";
import NotificationContext from "../../Contexts/NotificationContext";
import { SafeAreaView } from "react-native-safe-area-context";
import StatusBar from "../../Components/StatusBar";
import { useIsFocused } from "@react-navigation/native";
import DataNotification from "../../Contexts/DataNotification";
import firebase from "../../Firebases/Firebase";
import * as Analytics from "expo-firebase-analytics";

const NotificationScreen = () => {
  const [dataNotification, setDataNotification] = useContext(DataNotification);
  const [notificationCount, setNotificationCount] =
    useContext(NotificationContext);
  const [notificationToShow, setNotificationToShow] =
    useState(dataNotification);
  const [refreshing, setRefreshing] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    setNotificationCount(Object.keys(notificationToShow).length);
    return () => {
      setNotificationCount(0);
    };
  }, [notificationToShow]);

  const handleOpenWithLinking = (link) => {
    if (link) {
      Analytics.logEvent("Notification", {
        contentType: "text",
        itemId: "Membuka notifikasi " + link,
        method: "direct",
      });
      Linking.openURL(link);
    }
  };

  async function getAllNotificaton() {
    const notificationData = [];
    await firebase
      .firestore()
      .collection("notifications")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          notificationData.push(doc.data());
        });
      });
    setNotificationToShow(notificationData);
    setRefreshing(false);
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getAllNotificaton();
  }, []);

  const RenderNotificationItem = ({ DataNotification }) => {
    return (
      <>
        {DataNotification.length > 0 ? (
          DataNotification.map((notif) => {
            return (
              <View key={notif.key}>
                <TouchableHighlight
                  underlayColor="#F1F4F9"
                  onPress={() => handleOpenWithLinking(notif.link)}
                >
                  <ContainerNotification>
                    <Images source={{ uri: notif.image }} />
                    <Content>
                      <TitleNotification>{notif.name}</TitleNotification>
                      <ContentNotification>{notif.content}</ContentNotification>
                    </Content>
                  </ContainerNotification>
                </TouchableHighlight>
              </View>
            );
          })
        ) : (
          <CenteredOnScreen>
            <Text>Tidak ada notifikasi!</Text>
          </CenteredOnScreen>
        )}
      </>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {isFocused && (
        <StatusBar backgroundColor="white" barStyle="dark-content" />
      )}
      <Views>
        <FlexRow>
          <TitlePage>Notifikasi</TitlePage>
        </FlexRow>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          bounces={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <RenderNotificationItem DataNotification={notificationToShow} />
        </ScrollView>
      </Views>
    </SafeAreaView>
  );
};

const FlexRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 12px;
`;

const Views = styled.View`
  flex: 1;
  margin-bottom: 100px;
`;

const TitlePage = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
`;

const ContainerNotification = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

const Content = styled.View`
  margin-left: 10px;
  max-width: 85%;
`;

const TitleNotification = styled.Text`
  color: #333333;
  font-size: 16px;
  font-weight: bold;
`;

const ContentNotification = styled.Text`
  color: #333333;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  margin-top: 2px;
  position: relative;
`;

const Images = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;

const TimeNotification = styled.Text`
  font-size: 12px;
  font-weight: 700;
  margin-top: 5px;
`;

const CenteredOnScreen = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  flex: 1;
`;

const TextDeleteAll = styled.Text`
  font-size: 12px;
`;

export default NotificationScreen;
