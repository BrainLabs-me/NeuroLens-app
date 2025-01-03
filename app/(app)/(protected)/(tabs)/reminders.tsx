import Card from "@/components/ui/card";
import H1, { P } from "@/components/ui/text";
import {
  AddCircle,
  ArrowRight2,
  BrushBig,
  Logout,
  Notification1,
  SecuritySafe,
  SecurityUser,
} from "iconsax-react-native";
import { View, Text, TouchableOpacity } from "react-native";
import Gravatar from "@/components/ui/gravatar";
import { Image, ImageBackground } from "expo-image";
import { Image as RnImage } from "react-native";
import Constants from "expo-constants";

import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import Modal from "@/components/ui/modal";
import { router } from "expo-router";
import { useUser } from "@/context/userContext";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Page() {
  const { user, logout } = useUser();
  return (
    <>
      <View className="bg-[#00000F] absolute w-full h-full"></View>
      <View className="overflow-hidden absolute w-full h-[200px]">
        <Image
          contentPosition={"bottom"}
          contentFit="cover"
          source={require("@/assets/images/profile_banner-2.png")}
          style={{
            width: "100%",
            height: 230,
            position: "absolute",
          }}
        ></Image>
        <LinearGradient
          colors={["transparent", "transparent", "#00000F", "#00000F"]}
          style={{
            width: "100%",
            height: 300,
          }}
        />
      </View>

      <RnImage
        className="w-full absolute  h-full"
        source={require("@/assets/images/bg-3.png")}
      ></RnImage>

      <SafeAreaView
        style={{ paddingTop: Constants.statusBarHeight + 20 }}
        className="flex-1 px-5 gap-5  "
      >
        <H1 className="text-left">Reminders</H1>
        <Card className="border-dashed flex-row items-center justify-between">
          <P className="text-left text-2xl text-white">Add</P>
          <AddCircle color="white "></AddCircle>
        </Card>
        <Card className="bg-primary flex-row items-center justify-between">
          <View>
            <P className="text-left text-2xl text-white">Reminder Name</P>
            <P className="text-left ">12:00 - 16:00</P>
          </View>
          <AddCircle color="white "></AddCircle>
        </Card>
      </SafeAreaView>
    </>
  );
}
