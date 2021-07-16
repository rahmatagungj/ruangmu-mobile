import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DataUserContext from "../../Contexts/DataUserContext";
import InClass from "../Home/Components/InClass";
import StatusBar from "../../Components/StatusBar";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const AllClassScreen = ({ navigation }) => {
  const [dataUser, setDataUser] = useContext(DataUserContext);
  const [dataClass, setDataClass] = useState(dataUser["Class"]);
  const [isSorted, setIsSorted] = useState(false);

  const isFocused = useIsFocused();

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
      sortBy(dataClass, "Name");
    } else {
      sortBack();
    }
    setIsSorted(!isSorted);
  };

  const RenderClassItem = () => {
    return (
      <ListClass>
        {dataClass.map((classes, idx) => {
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
      <Views>
        {isFocused && (
          <StatusBar backgroundColor="white" barStyle="dark-content" />
        )}
        <FlexView>
          <FlexWithBack>
            <TouchableOpacity
              underlayColor="transparent"
              onPress={() => navigation.goBack()}
            >
              <BackButton name="ios-chevron-down" size={25} color="black" />
            </TouchableOpacity>
            <TitleClass>Daftar Kelas</TitleClass>
          </FlexWithBack>
          <Sort>
            <TouchableOpacity underlayColor="transparent" onPress={handleSort}>
              <MaterialCommunityIcons name="sort" size={24} color="black" />
            </TouchableOpacity>
          </Sort>
        </FlexView>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <RenderClassItem />
        </ScrollView>
      </Views>
    </SafeAreaView>
  );
};

const Views = styled.View`
  background: white;
  flex: 1;
`;

const TitleClass = styled.Text`
  padding-left: 15px;
  padding-top: 10px;
  font-size: 19px;
  font-weight: 800;
  width: 60%;
`;

const FlexView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
`;

const Sort = styled.View`
  margin-top: 10px;
  padding-right: 15px;
`;

const ListClass = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const FlexWithBack = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
  width: 80%;
`;

const BackButton = styled(Ionicons)`
  padding-top: 10px;
`;

export default AllClassScreen;
