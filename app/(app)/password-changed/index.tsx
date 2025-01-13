import { Image, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Text } from "react-native";
import H1, { P } from "@/components/ui/text";
import { Lock, PasswordCheck, TickCircle } from "iconsax-react-native";
import Button from "@/components/ui/button";
import { Link, router } from "expo-router";
import { useTranslation } from "react-i18next";

export default function Page() {
  const { t, i18n } = useTranslation();
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
      />
      <Image
        source={require("@/assets/images/logo_horizontal.png")}
        style={styles.logo}
        className="absolute top-10 left-[50%] translate-x-[-50%]"
      />
      <SafeAreaView className="flex w-full max-w-[90%] h-full mx-auto z-20 flex-col justify-center items-center">
        {/* Logo Image */}
        <TickCircle color="white" size={130}></TickCircle>
        <View className="flex w-full mt-3 mb-7 flex-col items-center justify-center ">
          <H1 className="mb-2 text-left">Password Changed</H1>
          <Text className="text-[rgba(255,255,255,0.5)] text-[15px]">
            Your password has been changed successfully
          </Text>
        </View>{" "}
        <TouchableOpacity className="w-full">
          <Button className="mt-6 w-full" onPress={() => router.push("/")}>
            Back to Login
          </Button>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

// Add custom styles to manage the image size, bell button, and blur effect
const styles = StyleSheet.create({
  logo: {
    width: 160, // Set the desired width of the logo
    height: 80, // Set the desired height of the logo
    resizeMode: "contain", // Ensure the image maintains its aspect ratio
  },
});
