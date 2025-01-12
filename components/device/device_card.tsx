import React, { useRef, useEffect } from "react";
import { StyleSheet, Touchable, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import {
  Add,
  BatteryEmpty,
  Bluetooth,
  Electricity,
} from "iconsax-react-native";
import H1, { P } from "@/components/ui/text";
import Card from "@/components/ui/card";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
export default function DeviceCard() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <TouchableOpacity
        onPress={() => router.push("/(app)/(protected)/device")}
      >
        <Card className="p-3 pb-3 justify-between   flex-row">
          <View className="gap-3">
            <View className="flex-row items-center gap-2">
              <View className="p-2 bg-card border justify-center items-center border-border rounded-full">
                <Bluetooth color="white"></Bluetooth>
              </View>
              <P className="text-left text-xl text-white">Name</P>
            </View>
            <View className="flex-row gap-3">
              <View className="flex-row items-center gap-1">
                <View className="relative  justify-center ">
                  <View className="absolute left-1 rounded-sm h-[10px] bg-green-400 w-[10%]"></View>
                  <BatteryEmpty color="white"></BatteryEmpty>
                </View>
                <P className="text-left items-center">15%</P>
              </View>
              <View className="flex-row items-center gap-1">
                <Electricity color="white"></Electricity>
                <P className="text-left items-center">
                  {t("home.connection-on")}
                </P>
              </View>
            </View>
          </View>
          <Image
            contentFit="contain"
            source={require("@/assets/images/device.png")}
            style={{
              width: 100,
              height: 80,
            }}
          ></Image>
        </Card>
      </TouchableOpacity>
    </>
  );
}

export function NoDeviceCard() {
  const { t, i18n } = useTranslation();
  return (
    <TouchableOpacity onPress={() => router.push("/(app)/(protected)/device")}>
      <Card className="flex-row  justify-between items-center">
        <View className="flex-row items-center gap-2">
          <View className="p-2 bg-card border justify-center items-center border-border rounded-full">
            <Bluetooth color="white"></Bluetooth>
          </View>
          <P className="text-left text-xl text-white">
            {t("home.connection-off")}
          </P>
        </View>
        <Add color="white" size={30}></Add>
      </Card>
    </TouchableOpacity>
  );
}
