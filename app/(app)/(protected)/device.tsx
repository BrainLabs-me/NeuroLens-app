import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import {
  ArrowLeft,
  BatteryEmpty,
  Bluetooth,
  Electricity,
} from "iconsax-react-native";
import H1, { P } from "@/components/ui/text";
import { Image } from "expo-image";
import { router } from "expo-router";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
export default function App() {
  const { t, i18n } = useTranslation();
  const scale = useSharedValue(1);
  useEffect(() => {
    scale.value = withRepeat(withTiming(1.2, { duration: 1200 }), -1, true);
  }, []);
  const animated = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  return (
    <>
      <View className="absolute px-5 gap-12 bg-background w-full h-full" />

      <SafeAreaView className="flex-1 justify-start gap-12 px-5 items-center">
        <Animated.Image
          source={require("@/assets/images/Device_BG.png")}
          style={[
            animated,
            {
              width: "120%",
              height: "120%",
              position: "absolute",
              top: 0,
            },
          ]}
        />
        <View className="flex-row justify-between w-full items-center ">
          <TouchableOpacity
            onPress={() => router.back()}
            className="items-center justify-center"
          >
            <ArrowLeft color="white" size={28}></ArrowLeft>
          </TouchableOpacity>
          <P className="text-2xl text-white">{t("device.number")} YYY_4860</P>
          <View className="opacity-0">
            <ArrowLeft></ArrowLeft>
          </View>
        </View>
        <Image
          contentFit="contain"
          source={require("@/assets/images/device.png")}
          style={{
            width: "90%",
            height: 220,
          }}
        ></Image>
        <View className="gap-2">
          <P className="text-2xl text-white">{t("device.number")} YYY_4860</P>
          <View className="flex items-center"></View>
          <View className="flex-row gap-12">
            <View className="flex-row items-center gap-1">
              <View className="h-2 w-2 rounded-full bg-primary"></View>
              <Electricity color="white"></Electricity>
              <P className="text-left items-center">{t("device.connected")}</P>
            </View>
            <View className="flex-row items-center gap-1">
              <View className="relative  justify-center ">
                <View className="absolute left-1 rounded-sm h-[10px] bg-green-400 w-[10%]"></View>
                <BatteryEmpty color="white"></BatteryEmpty>
              </View>
              <P className="text-left items-center">15%</P>
            </View>
          </View>
        </View>
        <View className="gap-5">
          <View className="w-full flex-row gap-5">
            <Card className="flex-1">
              <View className=" w-10 h-10 bg-card border justify-center items-center border-border rounded-full">
                <Bluetooth color="white"></Bluetooth>
              </View>
              <View>
                <P className="text-left text-lg">{t("device.update")}</P>
              </View>
            </Card>
            <Card className="flex-1">
              <View className="w-10 h-10 bg-card border justify-center items-center border-border rounded-full">
                <Bluetooth color="white"></Bluetooth>
              </View>
              <View>
                <P className="text-left text-lg">{t("device.update")}</P>
              </View>
            </Card>
          </View>
          <View className="w-full flex-row gap-5">
            <Card className="flex-1">
              <View className="w-10 h-10 bg-card border justify-center items-center border-border rounded-full">
                <Bluetooth color="white"></Bluetooth>
              </View>
              <View>
                <P className="text-left text-lg">{t("device.update")}</P>
              </View>
            </Card>
            <Card className="flex-1">
              <View className="w-10 h-10 bg-card border justify-center items-center border-border rounded-full">
                <Bluetooth color="white"></Bluetooth>
              </View>
              <View>
                <P className="text-left text-lg">{t("device.update")}</P>
              </View>
            </Card>
          </View>
        </View>
        <Button className="w-full">{t("device.disconnect")}</Button>
      </SafeAreaView>
    </>
  );
}
