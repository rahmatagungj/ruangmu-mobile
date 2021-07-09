import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import DataNotification from "../../Data/DataNotification";

const NotificationScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      {DataNotification.map((notif, idx) => {
        return (
          <ContainerNotification key={idx}>
            <Images source={notif.Image} />
            <Content>
              <TitleNotification>{notif.Name}</TitleNotification>
              <ContentNotification>{notif.Content}</ContentNotification>
              <TimeNotification>{notif.Time}</TimeNotification>
            </Content>
            <CloseNotification>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() =>
                  alert(`Tombol tutup notifikasi berhasil ditekan!`)
                }
              >
                <AntDesign name="close" size={20} color="black" />
              </TouchableHighlight>
            </CloseNotification>
          </ContainerNotification>
        );
      })}
    </View>
  );
};

const ContainerNotification = styled.View`
  padding: 10px;
  flex-direction: row;
  background: #f5f5f5;
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
  max-width: 50px;
  max-height: 50px;
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

export default NotificationScreen;
