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
import Gravatar from "@/components/ui/gravatar";
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
      <View className="flex-1 px-5 gap-2  items-center  translate-y-[-60px]">
        <Gravatar photo={user?.photo} name={user?.name}></Gravatar>
        <View className="w-full gap-5">
          <View className="justify-center  items-center">
            <H1>{user?.name}</H1>
            {user?.type === "auth" && <P>{user?.email}</P>}
          </View>
          <Card className="text-center justify-center items-center mt-5">
            <TouchableOpacity className="flex-row items-center justify-between w-full">
              <View className="flex-row items-center gap-3">
                <SecuritySafe color="white" size={28}></SecuritySafe>
                <P className="text-[16px]">{t("profile.security")}</P>
              </View>
              <ArrowRight2 color="white" size={28}></ArrowRight2>
            </TouchableOpacity>
            <View className="h-[1px] bg-border w-[88%] "></View>
            <TouchableOpacity className="flex-row items-center justify-between w-full">
              <View className="flex-row items-center gap-3">
                <SecurityUser color="white" size={28}></SecurityUser>
                <P className="text-[16px]">{t("profile.privacy-policy")}</P>
              </View>
              <ArrowRight2 color="white" size={28}></ArrowRight2>
            </TouchableOpacity>
            <View className="h-[1px] bg-border w-[88%] "></View>
            <TouchableOpacity
              onPress={() =>
                router.push("/(app)/(protected)/(settings)/language")
              }
              className="flex-row items-center justify-between w-full"
            >
              <View className="flex-row items-center gap-3">
                <BrushBig color="white" size={28}></BrushBig>
                <P className="text-[16px]">{t("profile.language")}</P>
              </View>
              <ArrowRight2 color="white" size={28}></ArrowRight2>
            </TouchableOpacity>
            <View className="h-[1px] bg-border w-[88%] "></View>
            <TouchableOpacity className="flex-row items-center justify-between w-full">
              <View className="flex-row items-center gap-3">
                <Notification1 color="white" size={28}></Notification1>
                <P className="text-[16px]">{t("profile.notifications")}</P>
              </View>
              <Switch
                value={isEnabled}
                onValueChange={(val) => toggleSwitch()}
                backgroundActive={"#6747ED"}
                backgroundInactive={"gray"}
                renderActiveText={false}
                circleBorderActiveColor="#6747ED"
                circleBorderInactiveColor="gray"
                renderInActiveText={false}
              />
            </TouchableOpacity>
          </Card>
          <Card className="py-3">
            <Modal
              heading={"Log out?"}
              onPress={() => logout()}
              description={`${t("profile.log-out-action")} ${user?.name}`}
              trigger={
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-3">
                    <Logout color="white" size={28}></Logout>
                    <P className="text-[16px]">{t("profile.log-out")}</P>
                  </View>
                  <ArrowRight2 color="white" size={28}></ArrowRight2>
                </View>
              }
            ></Modal>
          </Card>
        </View>
      </View>
    </>
  );
}
