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

const DataClass = [
  {
    bgColor: "#bd3725",
    Name: "Model-Model Pembelajaran",
    Teacher: "ERNA JUHERNA, M.PD.I.",
    Picture: require("../../assets/erna.png"),
  },
  {
    bgColor: "#7782FD",
    Name: "Bahasa Inggris Dasar",
    Teacher: "BADROENI, M.PD.",
    Picture: require("../../assets/badroeni.png"),
  },
  {
    bgColor: "#F8B748",
    Name: "Etika Profesi Keguruan",
    Teacher: "IRFAN FAJRUL FALAH, M.PD.",
    Picture: require("../../assets/irfan.png"),
  },
  {
    bgColor: "#02B078",
    Name: "Teori - Teori Pembelajaran",
    Teacher: "AJENG RAHAYU TRESNA DEWI, M.PD.",
    Picture: require("../../assets/ajeng.png"),
  },
];

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
            {DataClass.map((classes, idx) => {
              return (
                <InClass
                  color={classes.bgColor}
                  title={classes.Name}
                  name={classes.Teacher}
                  picture={classes.Picture}
                />
              );
            })}
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
  flex: 1;
`;

const ListClass = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-bottom: 100px;
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
