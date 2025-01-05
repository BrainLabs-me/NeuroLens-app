import { ArrowLeft } from "iconsax-react-native";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { P } from "./ui/text";
import { cn } from "@/lib/utils";
import Button from "./ui/button";

const { height } = Dimensions.get("window");
export default function SlideModal() {
  const translateY = useSharedValue(height);

  const slideIn = () => {
    translateY.value = withTiming(0, {
      duration: 500,
      easing: Easing.out(Easing.ease),
    });
  };

  const slideOut = () => {
    translateY.value = withTiming(height, {
      duration: 500,
      easing: Easing.in(Easing.ease),
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));
  return (
    <>
      <Button onPress={slideIn}>
        <Text>Open Language Modal</Text>
      </Button>
      <Animated.View className="absolute w-screen h-screen top-0 px-5 gap-12 bg-background">
        <View className="items-center flex-row w-full justify-center relative">
          <TouchableOpacity className="absolute left-0">
            <ArrowLeft color="white" size={32}></ArrowLeft>
          </TouchableOpacity>
          <P className="text-white text-xl font-medium" weight="medium">
            Alo
          </P>
        </View>
        <View className="gap-5">
          <View>
            <TouchableOpacity className="flex-row justify-between items-center">
              <P className="text-white text-xl font-medium" weight="medium">
                English
              </P>
              <View
                className={cn("w-4 h-4 rounded-full border border-border  ")}
              ></View>
            </TouchableOpacity>
          </View>
          <View className="h-[1px] bg-card"></View>
          <View>
            <TouchableOpacity className="flex-row justify-between items-center">
              <P className="text-white text-xl font-medium" weight="medium">
                Montenegrin
              </P>
              <View
                className={cn("w-4 h-4 rounded-full border border-border  ")}
              ></View>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </>
  );
}
