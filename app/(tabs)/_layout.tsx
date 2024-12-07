import { Tabs } from "expo-router";
import React from "react";
import { View, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import HomeIcon from "@/components/icons/home";
import AssistantIcon from "@/components/icons/assistant";
import ProfileIcon from "@/components/icons/profile";
import ActivityIcon from "@/components/icons/activity";
// import TabBackground from "@/assets/images/Subtract.jpg";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View className="flex-1 bg-white relative">
      {/* Purple rectangle */}
      <View
        className="absolute bottom-0 rounded-t-3xl bg-purple-500"
        style={{
          height: 80, // Height of the purple rectangle
          width: SCREEN_WIDTH * 0.8, // Match the width of the tabs
          alignSelf: "center", // Center horizontally
        }}
      />

      <Tabs
        screenOptions={{
          tabBarShowLabel: false, // Remove titles
          tabBarStyle: {
            position: "absolute",
            bottom: 40, // Offset from the bottom
            left: 16,
            right: 16,
            height: 80,
            width: SCREEN_WIDTH * 0.8, // Match the width of the tabs
            transform: [{ translateX: SCREEN_WIDTH * 0.09 }], // Move to the left
            alignItems: "center", // Center horizontally
            justifyContent: "center",
            borderRadius: 30,
            elevation: 0, // Android shadow
            zIndex: 1, // Above purple rectangle
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            flex: 1, // Ensures proper vertical centering
          },
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
        }}
      >
        {/* Home Icon */}
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1, // Ensures proper vertical centering
                }}
              >
                <HomeIcon opacity={focused ? 1 : 0.5} />
              </View>
            ),
          }}
        />

        {/* Example2 Icon */}
        <Tabs.Screen
          name="example2/index"
          options={{
            title: "Example2",
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1, // Ensures proper vertical centering
                  marginRight: 10, // Space between icons
                }}
              >
                <ActivityIcon opacity={focused ? 1 : 0.5} />
              </View>
            ),
          }}
        />

        {/* Assistant Icon (unique center button) */}
        <Tabs.Screen
          name="assistant/index"
          options={{
            title: "Assistant",
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: 66,
                  width: 66,
                  borderRadius: 999,
                }}
                className="bg-primary"
              >
                <AssistantIcon opacity={focused ? 1 : 0.5} />
              </View>
            ),
          }}
        />

        {/* Example Icon */}
        <Tabs.Screen
          name="example/index"
          options={{
            title: "Example",
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1, // Ensures proper vertical centering
                  marginLeft: 10, // Space between icons
                }}
              >
                <ActivityIcon opacity={focused ? 1 : 0.5} />
              </View>
            ),
          }}
        />

        {/* Profile Icon */}
        <Tabs.Screen
          name="profile/index"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1, // Ensures proper vertical centering
                }}
              >
                <ProfileIcon opacity={focused ? 1 : 0.5} />
              </View>
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
