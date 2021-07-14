import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import InClass from "./Components/InClass";
import HeaderTop from "./Components/HeaderTop";
import SearchBar from "./Components/SearchBar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DataUserContext from "../../Context/DataUserContext";
import Notification from "../../Components/Notification";
import DevModeContext from "../../Context/DevModeContext";

const HomeScreen = ({ navigation }) => {
  const [dataUser, setDataUser] = useContext(DataUserContext);
  const [devMode, setDevMode] = useContext(DevModeContext);
  const [isSorted, setIsSorted] = useState(false);
  const [DataClass, setDataClass] = useState(dataUser["Class"]);
  const [canAnimate, setCanAnimate] = useState(true);

  const sortBy = (data, key) => {
    let arrayCopy = [...data];
    arrayCopy.sort(function (a, b) {
      if ("" + a[key] < "" + b[key]) return -1;
      if ("" + a[key] > "" + b[key]) return 1;
      return 0;
    });
    setDataClass(arrayCopy);
  };

  const sortBack = () => {
    setDataClass(dataUser["Class"]);
    setIsSorted(false);
    setDataUser(dataUser);
  };

  const handleSort = () => {
    if (!isSorted) {
      sortBy(DataClass, "Name");
      setCanAnimate(false);
    } else {
      sortBack();
    }
    setIsSorted(!isSorted);
  };

  useEffect(() => {
    sortBy(DataClass, "Teacher");
    return () => null;
  }, []);

  const RenderClassItem = () => {
    return (
      <ListClass>
        {DataClass.map((classes, idx) => {
          return (
            <InClass
              key={idx}
              color={classes.bgColor}
              title={classes.Name}
              name={classes.Teacher}
              picture={classes.Picture}
              navigation={navigation}
              currentDelay={500 + idx * 150}
              canAnimate={canAnimate}
              setCanAnimate={setCanAnimate}
            />
          );
        })}
      </ListClass>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!devMode ? (
        <Notification
          titles={
            "🔔 Kamu memiliki " +
            Object.keys(dataUser["Notification"]).length +
            " pemberitahuan"
          }
          bodys={`Hai. Sudah lama tidak melihatmu, periksa pembaruan terkini untukmu.`}
          secondss={Math.floor(Math.random() * (10 - 3 + 1) + 3)}
          datas="2"
        />
      ) : null}
      <Screen>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <HeaderTop />
          <SearchBar />
          <FlexView>
            <TitleClass>Daftar Kelas</TitleClass>
            <Sort>
              <TouchableOpacity
                underlayColor="transparent"
                onPress={handleSort}
              >
                <MaterialCommunityIcons name="sort" size={24} color="black" />
              </TouchableOpacity>
            </Sort>
          </FlexView>
          <RenderClassItem />
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
  margin-bottom: 100px;
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

const Sort = styled.View`
  margin-top: 5px;
`;

export default HomeScreen;
