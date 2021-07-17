import React, { useContext, useState } from "react";
import { View, Text, Image, ScrollView, Dimensions } from "react-native";
import styled from "styled-components/native";
import { Button } from "../../Components/Button";
import DataUserContext from "../../Contexts/DataUserContext";
import About from "./Common/About";
import Profile from "./Common/Profile";
import Setting from "./Common/Setting";
import DevModeContext from "../../Contexts/DevModeContext";
import BasicModal from "../../Components/Modal/BasicModal";
import { SafeAreaView } from "react-native-safe-area-context";
import StatusBar from "../../Components/StatusBar";
import { useIsFocused } from "@react-navigation/native";

const AccountScreen = ({ navigation }) => {
  const [dataUser, setDataUser] = useContext(DataUserContext);
  const [devMode, setDevMode] = useContext(DevModeContext);
  const [confirmLogout, setConfirmLogout] = useState(false);

  const isFocused = useIsFocused();

  const Logout = () => {
    navigation.replace("Login");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {isFocused && (
        <StatusBar backgroundColor="#1c2039" barStyle="light-content" />
      )}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={{ flex: 1, backgroundColor: "white", marginBottom: 100 }}>
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
          <ButtonLogout title="Keluar" onPress={() => setConfirmLogout(true)} />
        </View>
        <BasicModal
          title="Keluar"
          isVisible={confirmLogout}
          buttonRightText="Ya"
          onPressButtonRight={() => Logout()}
          buttonLeftText="Tidak"
          onPressButtonLeft={() => setConfirmLogout(false)}
        >
          <Text>Apakah anda yakin akan keluar akun?</Text>
        </BasicModal>
      </ScrollView>
    </SafeAreaView>
  );
};

const ContainerTop = styled.View`
  background: #1c2039;
  height: 398px;
  padding: 30px;
  padding-top: 50px;
  align-items: center;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
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
  border: 2px solid #6b5acc;
  border-radius: 15px;
  padding: 10px;
  flex-direction: row;
  shadow-color: #000;
  shadow-opacity: 0.5;
  shadow-radius: 3px;
  elevation: 5;
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
  background: #4cbfb9;
  width: 80%;
`;

export default AccountScreen;
