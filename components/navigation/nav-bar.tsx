import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native"; // Import Image and TouchableOpacity components
import { Notification } from "iconsax-react-native"; // Import the bell icon from Iconsax
import { BlurView } from "expo-blur"; // Import BlurView to apply the blur effect

export default function NavBar({}: {}) {
  return (
    <View className="absolute top-[3rem] px-[2rem] w-full z-20 flex-row justify-between items-center">
      <View>
        {/* Logo Image */}
        <Image
          source={require("@/assets/images/logo.png")} // Loading the logo from the assets folder
          style={styles.logo} // Styling the logo image
        />
      </View>

      {/* Bell Button with Circle and Blur Background */}
      <TouchableOpacity style={styles.bellContainer}>
        {/* Apply blur only to the background */}
        <Notification size="30" color="white" />
      </TouchableOpacity>
    </View>
  );
}

// Add custom styles to manage the image size, bell button, and blur effect
const styles = StyleSheet.create({
  logo: {
    width: 160, // Set the desired width of the logo
    height: 80, // Set the desired height of the logo
    resizeMode: "contain", // Ensure the image maintains its aspect ratio
  },
  bellContainer: {
    width: 80,
    height: 80,
    borderRadius: 99999, // Makes the button circular
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // Ensures the blur and contents stay within the circular area
    borderWidth: 2,
    borderColor: "#555555", // Light gray border
  },
});
