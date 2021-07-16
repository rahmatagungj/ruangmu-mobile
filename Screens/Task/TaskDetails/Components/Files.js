import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Button } from "../../../../Components/Button";
import styled from "styled-components/native";
import * as DocumentPicker from "expo-document-picker";
import SingleBasicModal from "../../../../Components/Modal/SingleBasicModal";
import LoadingCircle from "../../../../Components/LoadingCircle";

const Files = () => {
  const [singleFile, setSingleFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [canUpload, setCanUpoad] = useState(false);
  const [showSuccessUpload, setShowSuccessUpload] = useState(false);
  const [isLoadingUpload, setIsLoadingUpload] = useState(false);

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

  const handleUploadFile = () => {
    setIsLoadingUpload(true);
    setTimeout(() => {
      setShowSuccessUpload(true);
      setIsLoadingUpload(false);
    }, 4000);
  };

  const Modal = () => {
    return (
      <SingleBasicModal
        isVisible={showSuccessUpload}
        title="Berkas"
        buttonText="Tutup"
        onPressButton={() => {
          setShowSuccessUpload(false);
          setCanUpoad(false);
        }}
      >
        <Text>Berkas berhasil diunggah.</Text>
      </SingleBasicModal>
    );
  };

  return (
    <ContainerSubmitTask>
      <HeaderSubmit>
        <TitleSubmit>Tugas</TitleSubmit>
      </HeaderSubmit>
      {canUpload ? <TextFileName>{fileName}</TextFileName> : null}
      {isLoadingUpload ? <LoadingCircle /> : null}
      {!isLoadingUpload && (
        <ButtonSelectFile
          title={canUpload ? "Ganti Berkas" : "Pilih Berkas"}
          onPress={() => SelectFile()}
        />
      )}
      {canUpload && !isLoadingUpload ? (
        <>
          <ButtonUploadFile
            title="Unggah Berkas"
            onPress={() => !isLoadingUpload && handleUploadFile()}
          />
          <Modal />
        </>
      ) : null}
    </ContainerSubmitTask>
  );
};

const ContainerSubmitTask = styled.View`
  height: auto;
  border-radius: 15px;
  margin-top: 20px;
`;

const HeaderSubmit = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const TitleSubmit = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 16px;
  margin-left: 5px;
  color: #333333;
`;

const ButtonSelectFile = styled(Button)`
  background: #4cbfb9;
  border-radius: 5px;
`;

const ButtonUploadFile = styled(Button)`
  margin-top: 10px;
  background: #4cbfb9;
  border-radius: 5px;
`;

const TextFileName = styled.Text`
  margin-bottom: 10px;
`;
export default Files;
