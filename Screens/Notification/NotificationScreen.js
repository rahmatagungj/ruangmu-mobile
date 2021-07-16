import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import DataUserContext from "../../Contexts/DataUserContext";
import NotificationContext from "../../Contexts/NotificationContext";
import { SafeAreaView } from "react-native-safe-area-context";
import StatusBar from "../../Components/StatusBar";
import { useIsFocused } from "@react-navigation/native";

const NotificationScreen = () => {
  const [allNotification] = useContext(DataUserContext);
  const [notificationToShow, setNotificationToShow] = useState(
    allNotification["Notification"]
  );
  const [notificationCount, setNotificationCount] =
    useContext(NotificationContext);

  const isFocused = useIsFocused();

  const handleCloseNotification = (key) => {
    const newNotification = notificationToShow.filter(
      (item) => item.key !== key
    );
    setNotificationToShow(newNotification);
  };

  const handleDeleteAllNotification = () => {
    setNotificationToShow({});
  };

  useEffect(() => {
    setNotificationCount(Object.keys(notificationToShow).length);
    return () => {
      setNotificationCount(0);
    };
  }, [notificationToShow]);

  const RenderNotificationItem = ({ DataNotification }) => {
    return (
      <>
        {DataNotification.length > 0 ? (
          DataNotification.map((notif, idx) => {
            return (
              <View key={notif.key}>
                <TouchableHighlight
                  underlayColor="#F1F4F9"
                  onPress={() => null}
                >
                  <ContainerNotification>
                    <Images source={{ uri: notif.Image }} />
                    <Content>
                      <TitleNotification>{notif.Name}</TitleNotification>
                      <ContentNotification>{notif.Content}</ContentNotification>
                      <TimeNotification>{notif.Time}</TimeNotification>
                    </Content>

                    <CloseNotification>
                      <TouchableHighlight
                        underlayColor="transparent"
                        onPress={() => handleCloseNotification(notif.key)}
                      >
                        <AntDesign name="close" size={20} color="black" />
                      </TouchableHighlight>
                    </CloseNotification>
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
          {notificationToShow.length > 0 ? (
            <TouchableOpacity onPress={() => handleDeleteAllNotification()}>
              <TextDeleteAll>Hapus Semua</TextDeleteAll>
            </TouchableOpacity>
          ) : null}
        </FlexRow>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          bounces={false}
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
  max-width: 75%;
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

const CloseNotification = styled.View`
  position: absolute;
  right: 15px;
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