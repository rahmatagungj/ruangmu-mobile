import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import styled from "styled-components/native";
import { Button } from "../../Components/Button";
import useApiRequest from "../../Hooks/useApiRequest";
import LoadingCircle from "../../Components/LoadingCircle";

const TaskScreen = ({ navigation }) => {
  const { data, error, isLoaded } = useApiRequest(
    "https://my-json-server.typicode.com/rahmatagungj/ruangmu-mobile-api/Task"
  );

  const RenderTaskItem = ({ DataTask }) => {
    return (
      <>
        {DataTask.map((task, idx) => {
          return (
            <ContainerTask key={idx}>
              <TeacherPicture source={{ uri: task.Picture }} />
              <LimitedView>
                <Teacher>{task.Name}</Teacher>
                <ContainerDetailTask>
                  <TitleTask>{task.Task}</TitleTask>
                  <DetailsTask>{task.Details}</DetailsTask>
                  <ButtonTask
                    title="Buka"
                    onPress={() =>
                      navigation.navigate("TaskDetails", {
                        name: task.Task,
                        teacher: task.Name,
                        details: task.Details,
                        picture: task.Picture,
                        deadline: task.Deadline,
                        date: task.Date,
                      })
                    }
                  />
                </ContainerDetailTask>
              </LimitedView>
            </ContainerTask>
          );
        })}
      </>
    );
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <Views>
        <TitlePage>Daftar Tugas</TitlePage>
        {isLoaded && !error ? (
          <RenderTaskItem DataTask={data} />
        ) : (
          <LoadingCircle />
        )}
      </Views>
    </ScrollView>
  );
};

const TitlePage = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
`;

const Views = styled.View`
  flex: 1;
`;

const ContainerTask = styled.View`
  flex-direction: row;
  padding: 10px;
  margin-top: 3px;
`;

const TitleTask = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`;

const TeacherPicture = styled.Image`
  width: 40px;
  height: 40px;
`;

const LimitedView = styled.View`
  margin-right: 10px;
  margin-left: 10px;
  max-width: 80%;
`;

const ContainerDetailTask = styled.View`
  background: #e7e7e7;
  border-radius: 15px;
  padding: 10px;
  margin-top: 5px;
`;

const Teacher = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
`;

const DetailsTask = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  text-align: justify;
  color: #000000;
`;

const ButtonTask = styled(Button)`
  background: #afd83f;
  border-radius: 15px;
  margin-top: 10px;
`;
export default TaskScreen;
