import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  SecuritySafe,
  SecurityUser,
  Brush,
  Notification,
  Logout,
  ArrowDown,
  ArrowRight,
} from "iconsax-react-native";

export default function Page() {
  const menuItems = [
    { label: "Settings", icon: <SecuritySafe size={24} color="white" /> },
    { label: "Privacy Policy", icon: <SecurityUser size={24} color="white" /> },
    { label: "Theme", icon: <Brush size={24} color="white" /> },
    { label: "Notifications", icon: <Notification size={24} color="white" /> },
  ];

  return (
    <>
      <Image
        source={require("@/assets/images/bg-3.png")}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
        }}
      />
      <SafeAreaView className="flex-1 bg-transparent z-50">
        <View className="flex flex-col items-center justify-center h-full px-[5%]">
          {/* Top Section: Avatar */}
          <View
            className="flex flex-col items-center justify-center gap-3"
            style={{ marginBottom: 35 }}
          >
            <Image
              source={require("@/assets/images/avatar-preview.png")}
              style={{
                width: 140,
                height: 140,
                borderRadius: 100,
                borderWidth: 2,
                borderColor: "gray",
              }}
            />
            <Text className="text-[32px] text-white">Username</Text>
            <Text className="text-gray-500">username@example.com</Text>
          </View>

          {/* Bottom Section: Menu Items */}
          <View
            className="w-full mx-[5%]"
            style={{
              backgroundColor: "rgba(156, 163, 175, 0.2)",
              paddingHorizontal: 20,
              paddingTop: 25,
              paddingBottom: 15,
              borderRadius: 30,
              borderWidth: 2,
              borderColor: "rgba(255,255,255,0.1)",
            }}
          >
            {/* Menu Items */}
            {menuItems.map((item, index) => (
              <View key={index}>
                <TouchableOpacity className="flex flex-row justify-between items-center mb-3">
                  <View className="flex flex-row items-center gap-3">
                    {item.icon}
                    <Text className="text-white text-base">{item.label}</Text>
                  </View>
                  <ArrowRight size={24} color="rgba(255, 255, 255, 0.5)" />
                </TouchableOpacity>
                {/* Divider Line */}
                {index < menuItems.length - 1 && (
                  <View
                    style={{
                      height: 1,
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      marginTop: 5,
                      marginBottom: 15,
                    }}
                  />
                )}
              </View>
            ))}
          </View>

          {/* Log Out Section */}
          <View
            className="w-full mx-[5%] mt-6"
            style={{
              backgroundColor: "rgba(156, 163, 175, 0.2)",
              paddingHorizontal: 20,
              paddingVertical: 15,
              borderRadius: 30,
              borderWidth: 2,
              borderColor: "rgba(255,255,255,0.1)",
            }}
          >
            <TouchableOpacity className="flex flex-row justify-between items-center">
              <View className="flex flex-row items-center gap-3">
                <Logout size={24} color="white" />
                <Text className="text-white text-base">Log Out</Text>
              </View>
              <ArrowDown size={24} color="rgba(255, 255, 255, 0.5)" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
