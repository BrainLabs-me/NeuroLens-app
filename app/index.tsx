import Button from "@/components/ui/button";
import { View, TouchableOpacity, Text } from "react-native";
import { Image } from "react-native";
import { Sms } from "iconsax-react-native";
import H1, { P } from "@/components/ui/text";
import * as Google from "expo-auth-session/providers/google";
import { router } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import axios from "axios";
export default function IndexPage() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID,
    redirectUri: "com.brainlabs.neurolens://",
  });

  async function googleLogin(id: string) {
    try {
      const res = await axios.post(
        process.env.EXPO_PUBLIC_API_URL + "/google/login",
        {
          id_token: id,
        }
      );
      console.log(res.data);
      router.push("/(tabs)");
    } catch {
      console.log("err");
    }
  }

  useEffect(() => {
    //@ts-ignore
    googleLogin(response?.authentication.idToken);
  }, [response]);

  return (
    <>
      <Image
        source={require("@/assets/images/bg.png")}
        style={{ width: "100%", height: "100%", position: "absolute", top: 0 }}
      ></Image>
      <SafeAreaView className="flex-1 relative gap-7  pt-12">
        <Image
          source={require("@/assets/images/banner.png")}
          style={{ flex: 1, width: "100%", objectFit: "contain" }}
        ></Image>

        <View className="px-5 gap-3">
          <View>
            <H1>Relax and achieve {"\n"} greater peace of mind</H1>
            <P>Relax and achieve greater peace of mind</P>
          </View>
          <View className="flex flex-row gap-3">
            <TouchableOpacity
              onPress={() => {
                promptAsync();
              }}
              className="bg-[rgba(255,255,255,0.1)] gap-2  flex-row items-center justify-center border border-[rgba(255,255,255,0.1)] rounded-full flex-1 text-center py-3"
            >
              <Image
                source={require("@/assets/images/google.png")}
                className="w-7 h-7"
              ></Image>
              <Text
                style={{ fontFamily: "Poppins_500Medium" }}
                className="text-white text-center text-[16px]"
              >
                Google
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/login")}
              className="bg-[rgba(255,255,255,0.1)] gap-2 flex flex-row items-center justify-center border border-[rgba(255,255,255,0.1)] rounded-full flex-1 text-center py-3"
            >
              <Sms size="30" color="#fff" />

              <Text
                style={{ fontFamily: "Poppins_500Medium" }}
                className="text-white text-center text-[16px]"
              >
                Email
              </Text>
            </TouchableOpacity>
          </View>
          <Button onPress={() => router.push("/(tabs)/assistant")}>
            Start without account
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
