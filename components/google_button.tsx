import { Image } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import axios from "axios";
import Button from "./ui/button";
import { cn } from "@/lib/utils";
import { useUser } from "@/context/userContext";
import { useToken } from "@/hooks/useToken";
export default function GoogleButton({ className }: { className?: string }) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID,
    redirectUri: "com.brainlabs.neurolens://",
  });
  const { setUser } = useUser();
  const { setToken } = useToken();
  const [loading, setLoading] = useState(false);
  async function googleLogin(id?: string) {
    try {
      setLoading(true);
      const res = await axios.post(
        process.env.EXPO_PUBLIC_API_URL + "/google/login",
        {
          id_token: id,
        }
      );
      console.log(res.data.data);
      setToken(res.data.data.token);

      setUser({
        name: res.data.data.user.name,
        email: res.data.data.user.email,
        photo: res.data.data.user.photo,
        type: "auth",
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    //@ts-ignore
    googleLogin(response?.authentication?.idToken);
  }, [response]);
  return (
    <>
      <Button
        loading={loading}
        onPress={() => promptAsync()}
        icon={
          <Image
            source={require("@/assets/images/google.png")}
            className="w-7 h-7"
          ></Image>
        }
        type="secondary"
        className={cn("justify-center  flex-row gap-2 items-center", className)}
      >
        Google
      </Button>
    </>
  );
}
