import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Button } from "../../../../Components/Button";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";

const Files = () => {
  const [singleFile, setSingleFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [canUpload, setCanUpoad] = useState(false);

  const SelectFile = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "*/*", // all files
      // type: "image/*" // all images files
      // type: "audio/*" // all audio files
      // type: "application/*" // for pdf, doc and docx
      // type: "application/pdf" // .pdf
      // type: "application/msword" // .doc
      // type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" // .docx
      // type: "vnd.ms-excel" // .xls
      // type: "vnd.openxmlformats-officedocument.spreadsheetml.sheet" // .xlsx
      // type: "text/csv" // .csv
    });
    if (!result.cancelled) {
      setSingleFile(result.uri);
      setFileName(result.name);
      setCanUpoad(true);
    }
  };

  return (
    <ContainerSubmitTask>
      <HeaderSubmit>
        <FontAwesome name="calendar-check-o" size={20} color="#073C64" />
        <TitleSubmit>Tugas Anda</TitleSubmit>
      </HeaderSubmit>
      {canUpload ? <TextFileName>{fileName}</TextFileName> : null}
      <ButtonSelectFile title="Pilih Berkas" onPress={() => SelectFile()} />
      {canUpload ? <ButtonUploadFile title="Unggah Berkas" /> : null}
    </ContainerSubmitTask>
  );
};

const ContainerSubmitTask = styled.View`
  height: auto;
  border-radius: 15px;
  padding: 10px;
  margin-top: 10px;
  border: 2px solid #6c6fc6;
  border-radius: 15px;
`;

const HeaderSubmit = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const TitleSubmit = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  margin-left: 5px;
  color: #333333;
`;

const ButtonSelectFile = styled(Button)`
  background: #073c64;
  border-radius: 5px;
`;

const ButtonUploadFile = styled(Button)`
  margin-top: 10px;
  background: #073c64;
  border-radius: 5px;
`;

const TextFileName = styled.Text`
  margin-bottom: 10px;
`;
export default Files;
