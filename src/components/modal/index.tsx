import { View, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import AlertModal from "react-native-modal";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { colors } from "@/src/theme";
import { Ionicons } from "@expo/vector-icons";
import { ModalProp } from "@/src/types/modalTypes";

const Modal = ({
  modalVisible,
  title,
  firstAnswer,
  displayQuestion = "flex",
}: ModalProp) => {
  let [visibleModal, setVisibleModal] = useState(modalVisible);

  useEffect(() => {
    setVisibleModal(modalVisible);
  }, [modalVisible]);


  return (
    <AlertModal
      isVisible={visibleModal}
      animationInTiming={200}
      animationOutTiming={200}
      backdropTransitionInTiming={200}
      backdropTransitionOutTiming={200}
      backdropOpacity={1}
      backdropColor={colors.primary[1400]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyles}
      >
        <View style={styles.innerContainer}>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => {
                setVisibleModal(!visibleModal);
              }}
            >
              <Ionicons
                name="close-outline"
                size={40}
                color={colors.primary[10]}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>{title}</Text>

          <Text style={{ ...styles.question, display: displayQuestion }}>
            Why do we ask?
          </Text>

          <Text style={styles.answer}>{firstAnswer}</Text>
        </View>
      </ScrollView>
    </AlertModal>
  );
};

export default Modal;
