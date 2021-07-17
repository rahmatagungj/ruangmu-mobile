import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import InClass from "./Components/InClass";
import HeaderTop from "./Components/HeaderTop";
import DataUserContext from "../../Contexts/DataUserContext";
import DevModeContext from "../../Contexts/DevModeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import StatusBar from "../../Components/StatusBar";
import { useIsFocused } from "@react-navigation/native";
import Banner from "./Components/Banner/Banner";
import DataApp from "../../Contexts/DataApp";

const HomeScreen = ({ navigation }) => {
  const [dataUser, setDataUser] = useContext(DataUserContext);
  const [devMode, setDevMode] = useContext(DevModeContext);
  const isFocused = useIsFocused();
  const [dataApp, setDataApp] = useContext(DataApp);

  const Banners = dataApp[0]["banner"];
  // to Show DataClass with limit 4 data
  const DataClassLimit = dataUser["Class"].slice(0, 4);

  // map all Banners to array
  // const BannersArray = Banners.map((banner, index) => {
  //   return <Banner key={index} banner={banner} navigation={navigation} />;
  // });

  const RenderLimitedClassItem = () => {
    return (
      <ListClass>
        {DataClassLimit.map((classes, idx) => {
          return (
            <InClass
              key={idx}
              color={classes.bgColor}
              title={classes.Name}
              name={classes.Teacher}
              picture={classes.Picture}
              navigation={navigation}
            />
          );
        })}
      </ListClass>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {isFocused && (
        <StatusBar backgroundColor="#b12c30" barStyle="light-content" />
      )}
      <Screen>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <HeaderTop />
          <Banner data={Banners} />
          <FlexView>
            <TitleClass>Daftar Kelas</TitleClass>
            <All>
              <TouchableOpacity
                underlayColor="transparent"
                onPress={() => navigation.navigate("AllClassScreen")}
              >
                <ShowAllClass>Lihat Semua</ShowAllClass>
              </TouchableOpacity>
            </All>
          </FlexView>
          <RenderLimitedClassItem />
        </ScrollView>
      </Screen>
    </SafeAreaView>
  );
};

const Screen = styled.View`
  font-variant: small-caps;
  background-color: #f6f9fd;
  height: 100%;
  flex: 1;
`;

const ListClass = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 120px;
`;

const TitleClass = styled.Text`
  padding-left: 15px;
  padding-top: 10px;
  font-size: 18px;
  font-weight: bold;
  width: 60%;
`;

const FlexView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const All = styled.View`
  margin-top: 10px;
  padding-right: 15px;
`;

const ShowAllClass = styled.Text`
  font-size: 11px;
  background: #4cbfb9;
  padding: 5px;
  border-radius: 15px;
  color: white;
`;

export default HomeScreen;
