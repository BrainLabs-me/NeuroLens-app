import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import TabBar from "@/components/navigation/tab-bar";
import {
  Chart,
  Home,
  MusicPlay,
  Notification,
  Profile,
} from "iconsax-react-native";
import { Image } from "expo-image";
import Button from "@/components/ui/button";
import Constants from "expo-constants";
export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <>
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
          name="stats"
          options={{
            title: "Example",
            tabBarIcon: ({ focused }) => (
              <Chart color={focused ? "white" : "rgba(255,255,255,0.4)"} />
            ),
          }}
        />
        <Tabs.Screen
          name="reminders"
          options={{
            title: "Assistant",
            tabBarIcon: ({ focused }) => (
              <MusicPlay color={focused ? "white" : "rgba(255,255,255,0.4)"} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused }) => (
              <Profile color={focused ? "white" : "rgba(255,255,255,0.4)"} />
            ),
          }}
        />
      </Tabs>
      <View
        style={{
          top: Constants.statusBarHeight,
        }}
        className="justify-between absolute  px-5 items-center flex-row w-full  "
      >
        <Image
          contentFit="contain"
          source={require("@/assets/images/logo_horizontal.png")}
          style={{
            width: 170,
            height: 50,
          }}
        ></Image>
        <Button
          type="secondary"
          className="aspect-square w-16 justify-center items-center h-16 "
        >
          <Notification color="white"></Notification>
        </Button>
      </View>
      <View className="absolute bottom-0 translate-y-[55px] px-[20px] w-full">
        <View className=" h-32 bg-primary rounded-[40px] w-full rotate-2"></View>
      </View>
    </>
  );
}
