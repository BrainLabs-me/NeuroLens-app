import { useUser } from "@/context/userContext";
import { useToken } from "@/hooks/useToken";
import { Redirect, Slot, Stack } from "expo-router";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";

export default function protectedLayout() {
  const { user, loading } = useUser();
  const { token } = useToken();
  useEffect(() => {
    if (loading === false) {
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000);
    }
  }, [loading]);
  if (loading) {
    return <View className="w-full h-full bg-background"></View>;
  } else if (user) {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="device"
          options={{
            animation: "slide_from_bottom",
            presentation: "containedTransparentModal",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="assistant"
          options={{
            animation: "slide_from_bottom",
            presentation: "containedTransparentModal",
          }}
        ></Stack.Screen>
      </Stack>
    );
  } else {
    return <Redirect href={"/(app)/start"} />;
  }
}
