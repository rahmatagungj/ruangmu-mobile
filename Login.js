import React, { useState, useContext, useEffect, useRef } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import styled from "styled-components/native";
import StatusBar from "./Components/StatusBar";
import { Button } from "./Components/Button";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import LoadingCircle from "./Components/LoadingCircle";
import DataUserContext from "./Context/DataUserContext";
import NotificationContext from "./Context/NotificationContext";
import TaskContext from "./Context/TaskContext";
import DevModeContext from "./Context/DevModeContext";
import * as Animatable from "react-native-animatable";

const Login = ({ navigation }) => {
  const [devMode, setDevMode] = useContext(DevModeContext);
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [dataUser, setDataUser] = useContext(DataUserContext);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [notificationCount, setNotificationCount] =
    useContext(NotificationContext);
  const [taskCount, setTaskCount] = useContext(TaskContext);

  const secondTextInput = useRef();

  const showAlertLogin = () => {
    Alert.alert("Pemberitahuan", "Nim dan Password wajib di isi!", [
      { text: "OK", onPress: () => null },
    ]);
  };

  const getDataUser = () => {
    axios
      .get(
        "https://my-json-server.typicode.com/rahmatagungj/ruangmu-mobile-api/db"
      )
      .then((response) => {
        setDataUser(response.data);
        setLoading(false);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (isLoaded && !error) {
      navigation.replace("Home", {
        notificationCount: Object.keys(dataUser["Notification"]).length,
        taskCount: Object.keys(dataUser["Task"]).length,
      });
    }
    return () => {
      setLoading(false);
    };
  }, [isLoaded, error]);

  const handleLogin = async () => {
    if ((nim.length > 0 && password.length > 0) || devMode) {
      setLoading(true);
      getDataUser();
    } else {
      showAlertLogin();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ContainerCenter>
        <StatusBar backgroundColor="#F2F2F2" barStyle="dark-content" />
        <Animatable.View animation="fadeInUpBig" iterationCount={1} delay={500}>
          <Logo source={require("./assets/logobar.png")} />
        </Animatable.View>
        <Divier />
        <Animatable.View animation="flipInX" iterationCount={1} delay={1000}>
          <ContainerForm>
            <FontAwesome name="user" size={20} color="black" />
            <FormNim
              placeholder="Nomor Induk Mahasiswa"
              underlineColorAndroid="transparent"
              onChangeText={(text) => setNim(text)}
              returnKeyType="next"
              onSubmitEditing={() => {
                secondTextInput.current.focus();
              }}
            />
          </ContainerForm>
        </Animatable.View>
        <Animatable.View animation="flipInX" iterationCount={1} delay={1300}>
          <ContainerForm>
            <MaterialIcons name="vpn-key" size={20} color="black" />
            <FormPassword
              placeholder="Kata Sandi"
              secureTextEntry={true}
              returnKeyType="go"
              underlineColorAndroid="transparent"
              onChangeText={(text) => setPassword(text)}
              ref={secondTextInput}
              onSubmitEditing={handleLogin}
            />
          </ContainerForm>
        </Animatable.View>
        {loading ? (
          <LoadingCircle />
        ) : (
          <Animatable.View animation="zoomIn" iterationCount={1} delay={1500}>
            <Buttons title="Masuk" onPress={handleLogin} />
          </Animatable.View>
        )}
      </ContainerCenter>
    </KeyboardAvoidingView>
  );
};

const Divier = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;
const ContainerCenter = styled.View`
  padding: 10px;
  align-items: center;
  margin: auto;
`;

const Buttons = styled(Button)`
  background: #073c64;
  min-width: 183px;
  margin-top: 20px;
  border-radius: 15px;
`;

const ContainerForm = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #e3e4e9;
  height: 40px;
  border-radius: 15px;
  margin: 5px;
  padding: 8px;
`;

const FormNim = styled.TextInput`
  min-width: 280px;
  height: 51px;
  margin-left: 5px;
`;

const FormPassword = styled.TextInput`
  min-width: 275px;
  height: 51px;
  margin-left: 5px;
`;

const Logo = styled.Image`
  min-width: 246px;
  min-height: 62px;
`;

export default Login;
