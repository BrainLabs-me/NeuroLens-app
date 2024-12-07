import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import HomeIcon from "@/components/icons/home";
import AssistantIcon from "@/components/icons/assistant";
import ProfileIcon from "@/components/icons/profile";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <HomeIcon opacity={focused ? 1 : 0.5} />
          ),
        }}
      />
      <Tabs.Screen
        name="assistant/index"
        options={{
          title: "Assistant",
          tabBarIcon: ({ focused, color, size }) => (
            <AssistantIcon opacity={focused ? 1 : 0.5} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <ProfileIcon opacity={focused ? 1 : 0.5} />
          ),
        }}
      />
    </Tabs>
  );
}
