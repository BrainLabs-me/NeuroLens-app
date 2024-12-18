import Input from "@/components/ui/input";
import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

export default function Page() {
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
      <SafeAreaView className="flex-1 "></SafeAreaView>
    </>
  );
}
