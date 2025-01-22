import Card from "@/components/ui/card";
import H1, { P } from "@/components/ui/text";
import {
  ArrowRight2,
  BrushBig,
  Logout,
  Notification1,
  SecuritySafe,
  SecurityUser,
} from "iconsax-react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { Image, ImageBackground } from "expo-image";
import { Image as RnImage } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import Modal from "@/components/ui/modal";
import { router } from "expo-router";
import { useUser } from "@/context/userContext";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "@/components/navigation/header";
import { Switch } from "react-native-switch";
export default function Page() {
  const { t, i18n } = useTranslation();
  const text = t("welcome");

  const currentLanguage = i18n.language;

  const changeLanguage = async (lang: string) => {
    await AsyncStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const { user, logout } = useUser();
  return (
    <>
      <View className="bg-[#00000F] absolute w-full h-full"></View>
      <View className="overflow-hidden h-[200px]">
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
      <Header></Header>
      <View className="flex-1 gap-4 items-center">
        <View className="w-full gap-5">
          <View className="flex flex-col gap-2">
            <H1>Security</H1>
            <P>Manage your account security</P>
          </View>
          <Card className="text-center justify-center items-center py-12 gap-4 mt-5 rounded-none">
            <TouchableOpacity
              className="flex-row items-center justify-between w-full"
              onPress={() => router.push("/(app)/forgot-password")}
            >
              <View className="flex-row items-center gap-3">
                <SecuritySafe color="white" size={28}></SecuritySafe>
                <P className="text-[16px]">{t("security.change-password")}</P>
              </View>
              <ArrowRight2 color="white" size={28}></ArrowRight2>
            </TouchableOpacity>
            <View className="h-[1px] bg-border w-[88%] "></View>
            <TouchableOpacity
              className="flex-row items-center justify-between w-full mt-6"
              onPress={() =>
                // router.push("/(app)/(protected)/(settings)/privacy-policy")
                "DELETE ACCOUNT REQ"
              }
            >
              <View className="flex-row items-center gap-3">
                <SecurityUser color="red" size={28}></SecurityUser>
                <P className="text-[16px] text-red-600">
                  {t("security.delete-account")}
                </P>
              </View>
              <ArrowRight2 color="white" size={28}></ArrowRight2>
            </TouchableOpacity>
            <View className="h-[1px] bg-border w-[88%] "></View>
          </Card>
        </View>
      </View>
    </>
  );
}
