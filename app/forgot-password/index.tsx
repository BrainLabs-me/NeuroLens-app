import Input from "@/components/ui/input";
import { Image, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Text } from "react-native";
import H1, { P } from "@/components/ui/text";
import { Lock, PasswordCheck } from "iconsax-react-native";
import Button from "@/components/ui/button";
import { router } from "expo-router";

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
      />
      <SafeAreaView className="flex w-full max-w-[90%] mx-auto z-20 flex-col justify-center items-center">
        {/* Logo Image */}
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
        <View className="flex w-full mt-3 mb-7 flex-col ">
          <H1 className="mb-2 text-left">Forgot password?</H1>
          <Text className="text-[rgba(255,255,255,0.5)] text-[14px]">
            Enter the email address with your account and we'll send an email
            with confirmation to reset your password.
          </Text>
        </View>
        <View className="flex flex-col gap-4 w-full justify-between">
          <Input placeholder="Enter your email" subtitle="Email" icon={<></>} />
        </View>
      </SafeAreaView>
      <Button className="py-4 absolute bottom-4 left-4 right-4">
        Send Code
      </Button>
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
