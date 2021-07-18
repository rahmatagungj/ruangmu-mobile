import React, { useState, useContext, useEffect, useRef } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import StatusBar from "./Components/StatusBar";
import { Button } from "./Components/Button";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import axios from "axios";
import LoadingCircle from "./Components/LoadingCircle";
import DataUserContext from "./Contexts/DataUserContext";
import DevModeContext from "./Contexts/DevModeContext";
import * as Animatable from "react-native-animatable";
import SingleBasicModal from "./Components/Modal/SingleBasicModal";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import Notification from "./Components/Notification";
import firebase from "./Firebases/Firebase";
import DataNotification from "./Contexts/DataNotification";
import DataApp from "./Contexts/DataApp";

async function getAllDataApp() {
  const appData = [];
  await firebase
    .firestore()
    .collection("applications")
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        appData.push(doc.data());
      });
    });
  return appData;
}

async function getAllNotificaton() {
  const notificationData = [];
  await firebase
    .firestore()
    .collection("notifications")
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        notificationData.push(doc.data());
      });
    });
  return notificationData;
}

const Login = ({ navigation }) => {
  const [devMode, setDevMode] = useContext(DevModeContext);
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [dataUser, setDataUser] = useContext(DataUserContext);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showAlertLogin, setShowAlertLogin] = useState(false);
  const secondTextInput = useRef();
  const isFocused = useIsFocused();
  const [dataNotification, setDataNotification] = useContext(DataNotification);
  const [dataApp, setDataApp] = useContext(DataApp);
  const [showAlertMaintenance, setShowAlertMaintenance] = useState(false);
  const [isNotificationDone, setIsNotificationDone] = useState(true);

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
    if (isLoaded && !error && !isNotificationDone) {
      navigation.replace("Home", {
        notificationCount: Object.keys(dataNotification).length,
        taskCount: Object.keys(dataUser["Task"]).length,
      });
    }
    return () => {
      setLoading(false);
    };
  }, [isLoaded, error, isNotificationDone]);

  const handleLogin = async () => {
    if ((nim.length > 0 && password.length > 0) || devMode) {
      setLoading(true);
      const allAppData = await getAllDataApp();
      setDataApp(allAppData);
      setShowAlertMaintenance(allAppData[2]["maintenance"]);
      if (!allAppData[2]["maintenance"]) {
        const allNotificationData = await getAllNotificaton();
        setDataNotification(allNotificationData);
        getDataUser();
      } else {
        setLoading(false);
      }
    } else {
      setShowAlertLogin(true);
    }
  };

  const IconShowPasword = () => {
    if (showPassword) {
      return (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name="eye" size={24} color="black" />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name="eye-off" size={24} color="black" />
        </TouchableOpacity>
      );
    }
  };

  const Modal = () => {
    return (
      <SingleBasicModal
        isVisible={showAlertLogin}
        title="Masuk"
        buttonText="Tutup"
        onPressButton={() => setShowAlertLogin(false)}
      >
        <Text>NIM dan Kata Sandi wajib di isi.</Text>
      </SingleBasicModal>
    );
  };

  const ModalMaintenance = () => {
    return (
      <SingleBasicModal
        isVisible={showAlertMaintenance}
        title="Maintenance"
        buttonText="Tutup"
        onPressButton={() => setShowAlertMaintenance(false)}
      >
        <Text>Mohon maaf, aplikasi sedang dalam perbaikan.</Text>
      </SingleBasicModal>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "white" }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ContainerCenter>
          <Notification
            isNotificationDone={isNotificationDone}
            setIsNotificationDone={setIsNotificationDone}
          />
          {isFocused && (
            <StatusBar backgroundColor="white" barStyle="dark-content" />
          )}
          <Animatable.View
            animation="fadeInUpBig"
            iterationCount={1}
            delay={500}
          >
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
                maxLength={20}
              />
            </ContainerForm>
          </Animatable.View>
          <Animatable.View animation="flipInX" iterationCount={1} delay={1300}>
            <ContainerForm>
              <MaterialIcons name="vpn-key" size={20} color="black" />
              <FormPassword
                placeholder="Kata Sandi"
                secureTextEntry={showPassword ? false : true}
                returnKeyType="go"
                underlineColorAndroid="transparent"
                onChangeText={(text) => setPassword(text)}
                ref={secondTextInput}
                onSubmitEditing={handleLogin}
                maxLength={20}
              />
              <IconShowPasword />
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
        <Modal />
        <ModalMaintenance />
      </SafeAreaView>
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
  background-color: #f1f4f9;
  height: 40px;
  border-radius: 15px;
  margin: 5px;
  padding: 8px;
`;

const FormNim = styled.TextInput`
  min-width: 270px;
  height: 51px;
  margin-left: 10px;
`;

const FormPassword = styled.TextInput`
  min-width: 245px;
  height: 51px;
  margin-left: 5px;
`;

const Logo = styled.Image`
  min-width: 246px;
  min-height: 62px;
`;

export default Login;
