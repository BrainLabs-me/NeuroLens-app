import Input from "@/components/ui/input";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import H1, { P } from "@/components/ui/text";
import { Lock, Profile } from "iconsax-react-native";
import Button from "@/components/ui/button";
import { Link, router } from "expo-router";
import GoogleButton from "@/components/google_button";
import axios from "axios";
import { useToken } from "@/hooks/useToken";
import { useUser } from "@/context/userContext";

export default function Page() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [errors, setErros] = useState<any>();
  const [loading, setLoading] = useState<any>(false);
  const { setToken, token } = useToken();
  const { setUser } = useUser();

  async function login() {
    setLoading(true);
    try {
      const res = await axios.post(process.env.EXPO_PUBLIC_API_URL + "/login", {
        email,
        password,
      });
      setToken(res.data.data.token);
      setUser({
        name: res.data.data.user.name,
        email: res.data.data.user.email,
        type: "auth",
      });
      console.log(res.data);
      router.replace("/(app)/(protected)/(tabs)");
    } catch (err: any) {
      console.log(err.response.data);
      setErros(err.response.data);
    } finally {
      setLoading(false);
    }
  }
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
        <View className="gap-3">
          <Input
            onChange={(value: string) => setEmail(value)}
            icon={<Profile size={26} color="rgba(255,255,255,0.4)"></Profile>}
            placeholder="Email"
            label="Email"
            error={errors?.errors.email}
          ></Input>
          <Input
            onChange={(value: string) => setPassword(value)}
            icon={<Lock size={26} color="rgba(255,255,255,0.4)"></Lock>}
            placeholder="Password"
            label="Password"
            error={errors?.errors.password}
          ></Input>
          <Link
            href={"/"}
            className="font-bold text-right self-end w-full text-primary"
          >
            Fotgot Password?
          </Link>
          <Button loading={loading} className="mt-2" onPress={() => login()}>
            Log in
          </Button>
        </View>
        <View className="gap-10">
          <View className="flex-row justify-between gap-6 items-center">
            <View className="h-[1px] bg-card flex-1"></View>
            <P>Continue with</P>
            <View className="h-[1px] bg-card flex-1"></View>
          </View>
          <GoogleButton className="py-5"></GoogleButton>
        </View>
        <Text
          className="text-white text-center font-bold"
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
