import React from "react";
import styled from "styled-components/native";
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  SafeAreaView,
  Image,
} from "react-native";
import InClass from "./Components/InClass";
import HeaderTop from "./Components/HeaderTop";
import SearchBar from "./Components/SearchBar";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Screen>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <HeaderTop />
          <SearchBar />
          <FlexView>
            <TitleClass>Daftar Kelas</TitleClass>
            <Sort source={require("../../assets/sort.png")} />
          </FlexView>
          <ListClass>
            <InClass
              color="#bd3725"
              title="Model-Model Pembelajaran"
              name="ERNA JUHERNA, M.PD.I."
              picture={require("../../assets/erna.png")}
            />
            <InClass
              color="#7782FD"
              title="Bahasa Inggris Dasar"
              name="BADROENI, M.PD."
              picture={require("../../assets/badroeni.png")}
            />
            <InClass
              color="#F8B748"
              title="Etika Profesi Keguruan"
              name="IRFAN FAJRUL FALAH, M.PD."
              picture={require("../../assets/irfan.png")}
            />
            <InClass
              color="#02B078"
              title="Teori - Teori Pembelajaran"
              name="AJENG RAHAYU TRESNA DEWI, M.PD."
              picture={require("../../assets/ajeng.png")}
            />
          </ListClass>
        </ScrollView>
      </Screen>
    </SafeAreaView>
  );
};

const Screen = styled.View`
  font-variant: small-caps;
  background-color: #f6f9fd;
  height: 100%;
`;

const ListClass = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ClassOne = styled.View`
  background: #df3620;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  min-height: 130px;
  min-width: 130px;
  padding: 10px;
  margin-top: 10px;
`;

const ClassTwo = styled.View`
  background: #7782fd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  min-height: 130px;
  min-width: 130px;
  padding: 10px;
  margin-top: 10px;
`;

const ClassThere = styled.View`
  background: #f8b748;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  min-height: 130px;
  min-width: 130px;
  padding: 10px;
  margin-top: 25px;
`;

const ClassFour = styled.View`
  background: #02b078;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  min-height: 130px;
  min-width: 130px;
  padding: 10px;
  margin-top: 25px;
`;

const TitleClass = styled.Text`
  padding-left: 15px;
  padding-top: 10px;
  font-size: 19px;
  font-weight: 800;
  width: 90%;
`;

const FlexView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Sort = styled.Image`
  margin-top: 3px;
`;

export default HomeScreen;
