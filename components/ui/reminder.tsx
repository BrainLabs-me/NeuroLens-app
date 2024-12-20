import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AddCircle, More } from "iconsax-react-native"; // Import icons from Iconsax

interface Props {
  add?: boolean;
  title?: string;
  description?: string;
  time?: string;
}

const Reminder = ({ add = false, title, description, time }: Props) => {
  const [menuVisible, setMenuVisible] = useState(false); // State to toggle menu visibility

  const handleAddPress = () => {
    console.log("Add button pressed!");
  };

  const handleMenuPress = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View
      className={`relative w-full h-[100px] rounded-[2.5rem] ${
        add
          ? "bg-[rgba(255,255,255,0.05)] border-dotted border-gray-400 mb-4"
          : "bg-primary border-primary border-solid"
      } border`}
    >
      <View className="flex-1 h-full flex-row items-center justify-between px-8">
        {add ? (
          <>
            <Text className="text-white text-[25px]">Add</Text>
            <AddCircle size="24" color="white" onPress={handleAddPress} />
          </>
        ) : (
          <>
            {/* Left Section: Title and Description */}
            <View>
              <Text className="text-white text-[25px]">{title}</Text>
              <Text className="text-gray-400 text-[15px]">{description}</Text>
            </View>

            {/* Top-Right: Circle */}
            <View
              style={{
                position: "absolute",
                top: -15,
                right: -15,
                width: 60,
                height: 60,
                borderRadius: 30,
                borderWidth: 2,
                borderColor: "black",
                backgroundColor: "transparent",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden", // Hides content outside the circle boundary
              }}
            >
              {/* Menu or Close Button inside the circle */}
              <TouchableOpacity
                style={{ position: "absolute", top: 22, right: 22 }}
                onPress={handleMenuPress}
              >
                {menuVisible ? (
                  <Text
                    style={{ fontSize: 15, color: "white", paddingRight: 7 }}
                  >
                    X
                  </Text>
                ) : (
                  <More size="24" color="white" /> // "More" when menu is not visible
                )}
              </TouchableOpacity>
            </View>

            {/* Bottom-Right: Time */}
            <Text
              style={{
                position: "absolute",
                bottom: 15,
                right: 15,
                fontSize: 14,
                opacity: 0.8,
              }}
              className="text-gray-400"
            >
              {time}
            </Text>

            {/* Optional Menu Dropdown */}
            {menuVisible && (
              <View
                style={{
                  position: "absolute",
                  top: 40,
                  right: 10,
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  padding: 10,
                  borderRadius: 8,
                  zIndex: 10,
                }}
              >
                <Text style={{ color: "white", marginBottom: 5 }}>Edit</Text>
                <Text style={{ color: "white", marginBottom: 5 }}>Delete</Text>
              </View>
            )}
          </>
        )}
      </View>
    </View>
  );
};

export default Reminder;
