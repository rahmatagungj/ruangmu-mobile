import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
const AccountScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F6F9FD" }}>
      <ContainerTop>
        <UserPicture source={require("../../assets/user.png")} />
        <UserName>Rahmat Agung Julians</UserName>
        <UserNim>191223045</UserNim>
        <UserBio>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </UserBio>
      </ContainerTop>
      <ContentCenter>
        <BadgeVerified source={require("../../assets/verified.png")} />
        <MetaContent>
          <VerifiedStatus>Akun Terverifikasi!</VerifiedStatus>
          <VerifiedEmail>rahmatagungj@gmail.com</VerifiedEmail>
        </MetaContent>
      </ContentCenter>
    </View>
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

export default AccountScreen;
