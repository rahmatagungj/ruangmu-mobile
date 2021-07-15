import React, { Children } from "react";
import { View, Text } from "react-native";
import {
  Modal,
  ModalContent,
  ScaleAnimation,
  ModalTitle,
  ModalFooter,
  ModalButton,
} from "react-native-modals";
import styled from "styled-components/native";

const SingleBasicModal = (props) => {
  return (
    <View>
      <Modal
        visible={props.isVisible}
        width={0.8}
        modalAnimation={
          new ScaleAnimation({
            initialValue: 0, // optional
            useNativeDriver: true, // optional
          })
        }
        // modalTitle={<ModalTitle title={props.title} />}
      >
        <ModalContents>{props.children}</ModalContents>
        <ModalFooter>
          <ModalButton text={props.buttonText} onPress={props.onPressButton} />
        </ModalFooter>
      </Modal>
    </View>
  );
};

const ModalContents = styled(ModalContent)`
  padding: 10px;
`;

export default SingleBasicModal;
