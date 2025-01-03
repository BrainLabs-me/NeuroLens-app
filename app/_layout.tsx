import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Redirect, Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "./global.css";
import { useColorScheme } from "@/hooks/useColorScheme";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { UserProvider, useUser } from "@/context/userContext";
import { useToken } from "@/hooks/useToken";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <UserProvider>
        <Stack
          initialRouteName="(app)/start"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="/(app)/auth/login" options={{}}></Stack.Screen>
          <Stack.Screen name="/(app)/auth/register" options={{}}></Stack.Screen>
          <Stack.Screen
            name="/(app)/start"
            options={{ animation: "fade", presentation: "transparentModal" }}
          ></Stack.Screen>
        </Stack>
      </UserProvider>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
