import Button from "@/components/ui/button";
import { View, TouchableOpacity, Text } from "react-native";
import { Image } from "react-native";
import { Image as ExImage } from "expo-image";
import { Sms } from "iconsax-react-native";
import H1, { P } from "@/components/ui/text";
import * as Google from "expo-auth-session/providers/google";
import { Link, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import GoogleButton from "@/components/google_button";
import { useToken } from "@/hooks/useToken";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "@/lib/types";
import { useUser } from "@/context/userContext";
export default function IndexPage() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID,
    redirectUri: "com.brainlabs.neurolens://",
  });
  const { setUser, user } = useUser();
  async function start_as_guest() {
    const randomNumber = Math.floor(Math.random() * 10000);

    const user: User = {
      name: `Guest ${randomNumber}`,
      type: "guest",
    };
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      router.replace("/(app)/(protected)/(tabs)");
    } catch {}
  }
  useEffect(() => {
    if (user) {
      router.replace("/(app)/(protected)/(tabs)");
    }
  }, [user]);
  return (
    <>
      <ExImage
        source={require("@/assets/images/bg.png")}
        style={{ width: "100%", height: "100%", position: "absolute", top: 0 }}
      ></ExImage>
      <SafeAreaView className="flex-1 justify-center items-center relative gap-7  pt-12">
        <View className="w-full aspect-square justify-center items-center rounded-3xl">
          <Image
            source={require("@/assets/images/woman.png")}
            className="rotate-2 "
            style={{
              flex: 1,
              width: "90%",
              objectFit: "contain",
              position: "absolute",
            }}
          ></Image>
          <Image
            source={require("@/assets/images/woman.png")}
            className="-rotate-2"
            style={{ flex: 1, width: "100%", objectFit: "contain" }}
          ></Image>
        </View>
        <View className="px-5 w-full gap-3">
          <View>
            <H1>Relax and achieve {"\n"} greater peace of mind</H1>
            <P>Relax and achieve greater peace of mind</P>
          </View>
          <View className="flex w-full flex-row gap-3">
            <GoogleButton className="flex-1 py-2 "></GoogleButton>
            <TouchableOpacity
              onPress={() => router.push("/(app)/auth/login")}
              className="bg-[rgba(255,255,255,0.1)] gap-2 flex flex-row items-center justify-center border border-[rgba(255,255,255,0.1)] rounded-full flex-1 text-center py-3"
            >
              <Sms size="30" color="#fff" />

              <Text
                style={{
                  fontFamily: "Poppins_500Medium",
                  includeFontPadding: false,
                }}
                className="text-white text-center text-[16px]"
              >
                Email
              </Text>
            </TouchableOpacity>
          </View>
          <Button onPress={() => start_as_guest()}>Start as guest</Button>
        </View>
        <Text
          className="text-white text-center font-bold pb-5"
          style={{ fontFamily: "Poppins_500Medium" }}
        >
          Don’t have an account?{" "}
          <Link
            href={"/(app)/auth/register"}
            className="text-primary"
            style={{ fontFamily: "Poppins_700Bold" }}
          >
            Register
          </Link>
        </Text>
      </SafeAreaView>
    </>
  );
}
