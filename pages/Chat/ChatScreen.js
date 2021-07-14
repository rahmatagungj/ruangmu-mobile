import React, { useState, useCallback, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { GiftedChat, Send } from "react-native-gifted-chat";
import StatusBar from "../../Components/StatusBar";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatScreen = ({ route, navigation }) => {
  const { title, picture, color, name } = route.params;

  const [messages, setMessages] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    setMessages([
      {
        _id: 4,
        text: "Baik, akan saya kerjakan dan upload tugasnya ke pertemuan hari ini.",
        createdAt: new Date(Date.UTC(2021, 6, 10, 3, 30, 30, 0)),
        user: {
          _id: 1,
          name: "Rahmat Agung Julians",
          avatar: require("../../assets/user.png"),
        },
        sent: true,
        received: true,
      },
      {
        _id: 3,
        text:
          "Sebagai gantinya, buatlah makalah penelitian yang berkaitan dengan " +
          title,
        createdAt: new Date(Date.UTC(2021, 6, 10, 3, 30, 30, 0)),
        user: {
          _id: 2,
          name: name,
          avatar: picture,
        },
        sent: true,
        received: true,
        quickReplies: {
          type: "radio",
          keepIt: true,
          values: [
            {
              title: "😄 Baik.",
              value: "yes",
            },
            {
              title: "Maaf, apa boleh saya bertanya?",
              value: "yes_picture",
            },
            {
              title: "😞 Saya tidak mengerti itu.",
              value: "no",
            },
          ],
        },
      },
      {
        _id: 2,
        text: "Waalaikumsallam. \nBaik, tidak apa-apa.",
        createdAt: new Date(Date.UTC(2021, 6, 10, 3, 30, 30, 0)),
        user: {
          _id: 2,
          name: name,
          avatar: picture,
        },
        sent: true,
        received: true,
      },
      {
        _id: 1,
        text: "Assalamuallaikum, maaf hari ini saya izin tidak dapat menghadiri perkuliahan. \nKebetulan sedang ada acara keluarga.",
        createdAt: new Date(Date.UTC(2021, 6, 10, 2, 0, 30, 0)),
        user: {
          _id: 1,
          name: "Rahmat Agung Julians",
          avatar: require("../../assets/user.png"),
        },
        sent: true,
        received: true,
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const RenderSendButton = (props) => {
    return (
      <Send {...props}>
        <ButtonSend>
          <MaterialCommunityIcons
            name="send-circle"
            size={35}
            color="#3e6ce9"
          />
        </ButtonSend>
      </Send>
    );
  };

  const scrollToBottomComponent = () => {
    return <Ionicons name="chevron-down" size={30} color="#2e2e2e" />;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isFocused && (
        <StatusBar backgroundColor="white" barStyle="dark-content" />
      )}
      <Views>
        <Header>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="ios-chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <TeacherName>{name}</TeacherName>
        </Header>
        <GiftedChat
          alwaysShowSend={true}
          renderSend={RenderSendButton}
          isLoadingEarlier={true}
          messages={messages}
          placeholder="Ketik pesan disini ..."
          scrollToBottom
          scrollToBottomComponent={scrollToBottomComponent}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </Views>
    </SafeAreaView>
  );
};

const Views = styled.View`
  flex: 1;
  background: #d1d1d1;
`;

const Header = styled.View`
  flex-direction: row;
  padding: 10px;
  background: white;
  align-items: center;
`;

const TeacherName = styled.Text`
  margin-left: 10px;
  width: 90%;
`;

const ButtonSend = styled.View`
  align-items: center;
  margin-bottom: 5px;
  margin-right: 5px;
`;

export default ChatScreen;
