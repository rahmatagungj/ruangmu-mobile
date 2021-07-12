import React, { useContext, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styled from "styled-components/native";
import { Button } from "../../Components/Button";
import DataUserContext from "../../Context/DataUserContext";
import About from "./Common/About";
import Profile from "./Common/Profile";
import Setting from "./Common/Setting";
import Notification from "../../Components/Notification";
import DevModeContext from "../../Context/DevModeContext";

const AccountScreen = ({ navigation }) => {
  const [dataUser, setDataUser] = useContext(DataUserContext);
  const [devMode, setDevMode] = useContext(DevModeContext);

  const HandleLogout = () => {
    navigation.replace("Login");
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      bounces={false}
    >
      {!devMode ? (
        <Notification
          titles="📝 Tugas Baru"
          bodys={
            dataUser["Task"][Math.floor(Math.random() + 0.5)]["Name"] +
            " baru saja mengirim tugas, periksa tugas segera."
          }
          secondss={Math.floor(Math.random() * (15 - 10 + 1) + 10)}
          datas="2"
        />
      ) : null}
      <View style={{ flex: 1, backgroundColor: "#F6F9FD", marginBottom: 100 }}>
        <ContainerTop>
          <UserPicture source={require("../../assets/user.png")} />
          <UserName>Rahmat Agung Julians</UserName>
          <UserNim>191223045</UserNim>
          <UserBio>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </UserBio>
        </ContainerTop>
        <ContentCenter>
          <BadgeVerified source={require("../../assets/verified.png")} />
          <MetaContent>
            <VerifiedStatus>Akun Terverifikasi!</VerifiedStatus>
            <VerifiedEmail>rahmatagungj@gmail.com</VerifiedEmail>
          </MetaContent>
        </ContentCenter>
        <Profile />
        <Setting />
        <About />
        <ButtonLogout title="Keluar" onPress={HandleLogout} />
      </View>
    </ScrollView>
  );
};

const ContainerTop = styled.View`
  background: #33c0a0;
  height: 398px;
  padding: 30px;
  padding-top: 50px;
  align-items: center;
`;

const UserPicture = styled.Image`
  width: 146px;
  height: 146px;
  border-radius: 100px;
`;

const UserName = styled.Text`
  font-weight: 700;
  font-size: 19px;
  margin-top: 5px;
  color: white;
`;

const UserNim = styled.Text`
  font-weight: 700;
  font-size: 15px;
  margin-top: 5px;
  color: white;
`;

const UserBio = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  color: white;
`;

const ContentCenter = styled.View`
  width: 291px;
  height: 86px;
  margin: 0 auto;
  margin-top: -40px;
  background: #ffffff;
  border: 2px solid #6c6fc6;
  border-radius: 15px;
  padding: 10px;
  flex-direction: row;
`;

const MetaContent = styled.View`
  padding: 10px;
`;

const BadgeVerified = styled.Image`
  min-width: 62px;
  min-height: 62px;
`;

const VerifiedStatus = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 21px;
`;

const VerifiedEmail = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #333333;
`;

const ButtonLogout = styled(Button)`
  padding: 10px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  background: #073c64;
  width: 80%;
`;

export default AccountScreen;
