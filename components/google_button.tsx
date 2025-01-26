import { Image } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import React, { useEffect, useState } from "react";
import Button from "./ui/button";
import { cn } from "@/lib/utils";
import { useUser } from "@/context/userContext";
import { useToken } from "@/hooks/useToken";
import { makeRedirectUri } from "expo-auth-session";
import axios from "axios";

const redirectUri = makeRedirectUri({
  native: "com.brainlabs.neurolens://", // Replace with your app's custom scheme
});

export default function GoogleButton({ className }: { className?: string }) {
  const [request, response, googlePromptAsync] = Google.useAuthRequest({
    clientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID,
    redirectUri: makeRedirectUri({
      native: "com.brainlabs.neurolens://",
    }),
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
      console.log("GOOGLE:", err.response);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    console.log("REQ", request);
  }, [request]);
  useEffect(() => {
    console.log("RESPONSE", response);
    //@ts-ignore
    googleLogin(response?.authentication?.idToken);
  }, [response]);

  return (
    <>
      <Button
        loading={loading}
        onPress={() => googlePromptAsync()}
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
