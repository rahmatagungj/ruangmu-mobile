import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components";

const DataNotification = [
  {
    Image: require("../../assets/user.png"),
    Name: "Rahmat Agung Julians",
    Content:
      "Terima kasih sudah membantu dalam pengetesan aplikasi, jika memiliki ide atau kesalahan pada aplikasi harap hubungi pengembang di instagram.com/rahmatagungj.",
    Time: "1 Jam lalu",
  },
  {
    Image: require("../../assets/alertNotification.png"),
    Name: "Sistem",
    Content: "Aplikasi sedang dalam tahap pengembangan.",
    Time: "2 Jam lalu",
  },
];

const NotificationScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      {DataNotification.map((notif, idx) => {
        return (
          <ContainerNotification>
            <Images source={notif.Image} />
            <Content>
              <TitleNotification>{notif.Name}</TitleNotification>
              <ContentNotification>{notif.Content}</ContentNotification>
              <TimeNotification>{notif.Time}</TimeNotification>
            </Content>
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
  max-width: 80%;
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

export default NotificationScreen;
