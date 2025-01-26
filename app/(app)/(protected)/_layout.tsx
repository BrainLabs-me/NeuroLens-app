import { useUser } from "@/context/userContext";
import { Redirect, Stack } from "expo-router";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";

export default function protectedLayout() {
  const { user, loading } = useUser();
  useEffect(() => {
    if (loading === false) {
      SplashScreen.hide();
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
