import React, { Children, useState } from "react";
import {
  Alert,
  Modal as RnModal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import H1, { P } from "./text";

const Modal = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <RnModal
        animationType="slide"
        statusBarTranslucent
        visible={modalVisible}
        transparent
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View className="border border-border rounded-3xl bg-background w-[80%]">
            <View className="p-3">
              <H1 className="text-2xl" lineHeight={24}>
                {props.heading}
              </H1>
              <P>{props.description}</P>
            </View>
            <View className="w-full border-t border-border justify-between flex-row px-3">
              {props.type === "alert" ? (
                <Pressable
                  onPress={() => setModalVisible(!modalVisible)}
                  className="justify-center flex-1 py-4 "
                >
                  <P className="text-center text-white" weight="medium">
                    OK!
                  </P>
                </Pressable>
              ) : (
                <>
                  <Pressable
                    onPress={() => setModalVisible(!modalVisible)}
                    className="justify-center flex-1 py-4 border-r border-border"
                  >
                    <P className="text-center ">Cancle</P>
                  </Pressable>
                  <Pressable
                    className="justify-center flex-1 py-4 "
                    onPress={props.onPress}
                  >
                    <P className="text-center text-white" weight="medium">
                      Log out
                    </P>
                  </Pressable>
                </>
              )}
            </View>
          </View>
        </View>
      </RnModal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        {props.trigger}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Modal;
