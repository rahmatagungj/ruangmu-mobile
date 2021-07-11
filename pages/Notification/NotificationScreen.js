import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import useApiRequest from "../../Hooks/useApiRequest";
import LoadingCircle from "../../Components/LoadingCircle";

const NotificationScreen = () => {
  const [allNotification, setAllNotification] = useState({});

  const { data, error, isLoaded } = useApiRequest(
    "https://my-json-server.typicode.com/rahmatagungj/ruangmu-mobile-api/Notification"
  );

  const handleCloseNotification = (key) => {
    const newNotification = allNotification.filter((item) => item.key !== key);
    setAllNotification(newNotification);
  };

  useEffect(() => {
    setAllNotification(data);
    return () => {
      setAllNotification({});
    };
  }, [data]);

  const RenderNotificationItem = () => {
    return (
      <>
        {allNotification.length > 0 ? (
          allNotification.map((notif, idx) => {
            return (
              <ContainerNotification key={idx}>
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
    <Views>
      <TitlePage>Notifikasi</TitlePage>
      {isLoaded && !error ? (
        <RenderNotificationItem DataNotification={allNotification} />
      ) : (
        <LoadingCircle />
      )}
    </Views>
  );
};

const Views = styled.View`
  flex: 1;
`;

const TitlePage = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
`;

const ContainerNotification = styled.View`
  padding: 10px;
  flex-direction: row;
  background: #e7e7e7;
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
  flex: 1;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export default NotificationScreen;
