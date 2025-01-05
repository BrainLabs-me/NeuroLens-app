import Card from "@/components/ui/card";
import H1, { P } from "@/components/ui/text";
import {
  ArrowLeft,
  ArrowRight2,
  BrushBig,
  Logout,
  Notification,
  Notification1,
  SecuritySafe,
  SecurityUser,
} from "iconsax-react-native";
import { View, Text, TouchableOpacity } from "react-native";
import Gravatar from "@/components/ui/gravatar";
import { Image, ImageBackground } from "expo-image";
import { Image as RnImage } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import Modal from "@/components/ui/modal";
import { router } from "expo-router";
import { useUser } from "@/context/userContext";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "@/components/ui/button";
import Constants from "expo-constants";
import Header from "@/components/navigation/header";
import { SafeAreaView } from "react-native-safe-area-context";
import { cn } from "@/lib/utils";

export default function Page() {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const changeLanguage = async (lang: string) => {
    await AsyncStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };
  const { user, logout } = useUser();
  return (
    <>
      <SafeAreaView className="flex-1 px-5 gap-12 bg-background">
        <View className="items-center flex-row w-full justify-center relative">
          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute left-0"
          >
            <ArrowLeft color="white" size={32}></ArrowLeft>
          </TouchableOpacity>
          <P className="text-white text-xl font-medium" weight="medium">
            {t("language_switch")}
          </P>
        </View>
        <View className="gap-5">
          <View>
            <TouchableOpacity
              onPress={() => changeLanguage("en")}
              className="flex-row justify-between items-center"
            >
              <P className="text-white text-xl font-medium" weight="medium">
                English
              </P>
              <View
                className={cn(
                  "w-4 h-4 rounded-full border border-border  ",
                  currentLanguage === "en" && "bg-primary"
                )}
              ></View>
            </TouchableOpacity>
          </View>
          <View className="h-[1px] bg-card"></View>
        </View>
      </SafeAreaView>
    </>
  );
}
