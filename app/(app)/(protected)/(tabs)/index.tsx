import React, { useState } from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Image } from "expo-image";
import * as d3 from "d3-shape";
import { SafeAreaView } from "react-native-safe-area-context";
import H1, { P } from "@/components/ui/text";
import Card from "@/components/ui/card";
import BrainIcon from "@/assets/svg/brain";
import DeviceCard, { NoDeviceCard } from "@/components/device/device_card";
import Constants from "expo-constants";
import Header from "@/components/navigation/header";
import { useTranslation } from "react-i18next";

export default function App() {
  const data = [10, 30, 50, 20, 80, 40, 20, 80, 40, 60];
  const width = 350;
  const height = 130;
  const { t, i18n } = useTranslation();

  const lineGenerator = d3
    .line()
    .x((d, i) => (i / (data.length - 1)) * width)
    .y((d) => height - (d / 100) * height)
    .curve(d3.curveCatmullRom);

  const linePath = lineGenerator(data);
  const [device, setDevice] = useState();
  return (
    <>
      <View className="bg-[#00000F] absolute w-full h-full"></View>

      <Image
        transition={200}
        source={require("@/assets/images/bg-3.png")}
        style={{
          transform: [{ scale: 1.0 }],
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
        }}
      ></Image>
      <Header></Header>

      <SafeAreaView
        style={{ paddingTop: Constants.statusBarHeight * 1.3 }}
        className="flex-1 justify-start   px-5 gap-5"
      >
        <H1 className="text-left">{t("home.title")}</H1>
        <Card className="p-0 overflow-hidden gap-0">
          <View className="px-3 pt-3">
            <View className="flex-row items-center gap-1">
              <View className="p-3 bg-card border justify-center items-center border-border rounded-full">
                <BrainIcon color="white"></BrainIcon>
              </View>
              <P className="text-left text-2xl text-white">{t("home.brain")}</P>
            </View>
            <P className="text-left">{t("home.update")} 03:20</P>
          </View>
          <Svg width={width} height={height}>
            <Path d={linePath} fill="none" stroke="#6747ED" strokeWidth={5} />
          </Svg>
        </Card>
        <View className="flex-row w-full gap-3">
          <Card className="p-3 bg-primary overflow-hidden flex-1 gap-3">
            <View className="">
              <View className="flex-row items-center gap-1">
                <View className="p-2 bg-card border justify-center items-center border-border rounded-full">
                  <BrainIcon color="white"></BrainIcon>
                </View>
                <P className="text-left text-lg text-white">
                  {t("home.focus")}
                </P>
              </View>
              <P className="text-left text-sm">{t("home.update")} 03:20</P>
            </View>
            <P className="text-2xl">
              <P className="text-4xl text-white text-left">7/</P>
              10
            </P>
          </Card>
          <Card className="p-3 bg-primary overflow-hidden flex-1 gap-3 ">
            <View className="">
              <View className="flex-row items-center gap-1">
                <View className="p-2 bg-card border justify-center items-center border-border rounded-full">
                  <BrainIcon color="white"></BrainIcon>
                </View>
              </View>
              <P className="text-left text-xl  text-white">
                {t("home.stress")}
              </P>

              <P className="text-left text-sm">{t("home.update")} 03:20</P>
            </View>
            <P className="text-2xl">
              <P className="text-4xl text-white text-left">7/</P>
              10
            </P>
          </Card>
        </View>
        {device ? <DeviceCard></DeviceCard> : <NoDeviceCard></NoDeviceCard>}
      </SafeAreaView>
    </>
  );
}
