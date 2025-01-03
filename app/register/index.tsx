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
        <View className="flex w-full mt-3 mb-7 flex-col justify-center items-center">
          <H1 lineHeight={20} className="my-6">
            Create Account
          </H1>
          <P lineHeight={20}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
            volutpat quam.
          </P>
        </View>
        <View className="flex flex-col gap-4 my-12">
          <Input placeholder="Full Name" subtitle="Full Name" />
          <Input placeholder="Email" subtitle="Email" />
          <Input
            placeholder="Password"
            subtitle="Password"
            icon={<PasswordCheck size={24} color="rgba(255,255,255,0.4)" />}
          />
          <Button className="pb-4 mt-8">Sign up</Button>
        </View>
        <View className="flex flex-col justify-center gap-7 items-center mt-6 w-full">
          {/* Horizontal lines with text */}
          <View className="flex-row items-center justify-center w-[80%] gap-5">
            <View style={{ height: 1, backgroundColor: "gray", flex: 1 }} />
            <Text className="text-gray-500 text-[16px]">Continue with</Text>
            <View style={{ height: 1, backgroundColor: "gray", flex: 1 }} />
          </View>
          <Button type="secondary" className="py-4 w-full">
            <View className="flex flex-row items-center gap-3 justify-center flex-1">
              <Image
                source={require("@/assets/images/google.png")}
                className="w-7 h-7"
              />
              <Text className="text-white text-[17px]">Google</Text>
            </View>
          </Button>
        </View>
      </SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "baseline", // Ensures all text aligns at the baseline
          position: "absolute",
          bottom: 30, // Adjusted to move it slightly up from the bottom
          width: "100%",
        }}
      >
        <Text
          className="text-white font-bold"
          style={{ fontFamily: "Poppins_500Medium", fontSize: 16 }}
        >
          Already have an account?{" "}
        </Text>
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text
            className="text-primary"
            style={{
              fontFamily: "Poppins_700Bold",
              fontSize: 16, // Match font size with the above text
            }}
          >
            Log in
          </Text>
        </TouchableOpacity>
      </View>
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
