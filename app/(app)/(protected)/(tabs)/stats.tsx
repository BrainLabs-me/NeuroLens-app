import Header from "@/components/navigation/header";
import { useUser } from "@/context/userContext";
import React from "react";
import { View, Text, Image } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <Image
        source={require("@/assets/images/bg-2.png")}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
        }}
      ></Image>
      <Header></Header>

      <View className="flex-1  bg-transparent items-center justify-center z-50">
        <Text className="text-white">Stats</Text>
      </View>
    </>
  );
}
