import Input from "@/components/ui/input";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import H1, { P } from "@/components/ui/text";
import { Lock, Profile } from "iconsax-react-native";
import Button from "@/components/ui/button";
import { Link } from "expo-router";

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
      ></Image>
      <SafeAreaView className="flex-1 p-5 justify-between">
        <View>
          <H1>Welcome back! {"\n"}Log in</H1>
          <P>
            Lorem ipsum dolor sit amet, consectetur{"\n"} adipiscing elit. Donec
            id volutpat quam.
          </P>
        </View>
        <View className="gap-5">
          <Input
            icon={<Profile size={26} color="rgba(255,255,255,0.4)"></Profile>}
            placeholder="Email"
            label="Email"
          ></Input>
          <Input
            icon={<Lock size={26} color="rgba(255,255,255,0.4)"></Lock>}
            placeholder="Password"
            label="Password"
          ></Input>
          <Link href={"/"} className="font-bold text-primary">
            Fotgot Password?
          </Link>
          <Button>Log in</Button>
        </View>
        <View className="gap-10">
          <View className="flex-row justify-between gap-6 items-center">
            <View className="h-[1px] bg-card flex-1"></View>
            <P>Continue with</P>
            <View className="h-[1px] bg-card flex-1"></View>
          </View>
          <Button
            icon={
              <Image
                source={require("@/assets/images/google.png")}
                className="w-7 h-7"
              ></Image>
            }
            type="secondary"
            className="justify-center flex-row gap-2 items-center"
          >
            Google
          </Button>
        </View>
        <Text
          className="text-white text-center font-bold"
          style={{ fontFamily: "Poppins_500Medium" }}
        >
          Don’t have an account?{" "}
          <Text
            className="text-primary"
            style={{ fontFamily: "Poppins_700Bold" }}
          >
            Register
          </Text>
        </Text>
      </SafeAreaView>
    </>
  );
}
