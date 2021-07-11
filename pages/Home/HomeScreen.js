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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useApiRequest from "../../Hooks/useApiRequest";
import LoadingCircle from "../../Components/LoadingCircle";

const HomeScreen = ({ navigation }) => {
  const { data, error, isLoaded } = useApiRequest(
    "https://my-json-server.typicode.com/rahmatagungj/ruangmu-mobile-api/Class"
  );

  const RenderClassItem = ({ DataClass }) => {
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
            />
          );
        })}
      </ListClass>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => alert(`Tombol pengurutan berhasil ditekan!`)}
              >
                <MaterialCommunityIcons name="sort" size={24} color="black" />
              </TouchableHighlight>
            </Sort>
          </FlexView>
          {isLoaded && !error ? (
            <RenderClassItem DataClass={data} />
          ) : (
            <LoadingCircle />
          )}
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

const Sort = styled.View`
  margin-top: 5px;
`;

export default HomeScreen;
