import React from "react";
import styled from "styled-components/native";
import { Text, View, ScrollView, TouchableHighlight } from "react-native";
import InClass from "./Components/InClass";

const Home = () => {
  return (
    <Screen>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <HeaderTop>
          <GroupOne>
            <SeparateOne>
              <TextGreetings>Halo,</TextGreetings>
              <TextName>Rahmat AJ.</TextName>
            </SeparateOne>
          </GroupOne>
        </HeaderTop>

        <TitleClass>Daftar Kelas</TitleClass>
        <ListClass>
          <InClass
            color="#B32917"
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
  );
};

const Screen = styled.View`
  font-variant: small-caps;
  margin-top: 25px;
  background-color: #f6f9fd;
  height: 100%;
`;

const HeaderTop = styled.View`
  background-color: #b91515;
  padding: 10px;
  color: white;
  background: #b91515;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  min-height: 311px;
`;

const GroupOne = styled.View`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  width: 100%;
`;

const SeparateOne = styled.View`
  flex-grow: 1;
`;

const TextGreetings = styled.Text`
  color: #f0f0f0;
  font-size: 20px;
`;

const TextName = styled.Text`
  font-size: 25px;
  color: #ffffff;
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
  padding-top: 20px;
  font-size: 19px;
  font-weight: 800;
`;

export default Home;
