import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import TabBar from "@/components/navigation/tab-bar";
import { Chart, Home, MusicPlay, Profile } from "iconsax-react-native";
import NavBar from "@/components/navigation/nav-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <>
      <NavBar></NavBar>
      <Tabs
        tabBar={(props) => <TabBar {...props}></TabBar>}
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <Home color={focused ? "white" : "rgba(255,255,255,0.4)"} />
            ),
          }}
        />

        <Tabs.Screen
          name="assistant/index"
          options={{
            title: "Assistant",
            tabBarIcon: ({ focused }) => (
              <MusicPlay color={focused ? "white" : "rgba(255,255,255,0.4)"} />
            ),
          }}
        />

        <Tabs.Screen
          name="example/index"
          options={{
            title: "Example",
            tabBarIcon: ({ focused }) => (
              <Chart color={focused ? "white" : "rgba(255,255,255,0.4)"} />
            ),
          }}
        />
        <Tabs.Screen
          name="example2/index"
          options={{
            title: "Example",
            tabBarIcon: ({ focused }) => (
              <Chart color={focused ? "white" : "rgba(255,255,255,0.4)"} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile/index"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused }) => (
              <Profile color={focused ? "white" : "rgba(255,255,255,0.4)"} />
            ),
          }}
        />
      </Tabs>

      <View className="absolute bottom-0 translate-y-[55px] px-[20px] w-full">
        <View className=" h-32 bg-primary rounded-[40px] w-full "></View>
      </View>
    </>
  );
}
