import {
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react"; // Import useState
import { Text } from "react-native";
import H1 from "@/components/ui/text";
import { CloseCircle, Eye, EyeSlash, TickCircle } from "iconsax-react-native"; // Import EyeSlash
import Button from "@/components/ui/button";

// Define the state type for password visibility
interface PasswordVisibility {
  newPasswordVisible: boolean;
  confirmPasswordVisible: boolean;
}

export default function Page() {
  // Use the state type for passwordVisibility
  const [passwordVisibility, setPasswordVisibility] =
    useState<PasswordVisibility>({
      newPasswordVisible: false,
      confirmPasswordVisible: false,
    });

  const [password, setPassword] = useState(""); // Track password
  const [confirmPassword, setConfirmPassword] = useState(""); // Track confirm password

  // Validation states
  const [isValidLength, setIsValidLength] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  // Toggle visibility function with proper typing
  const toggleVisibility = (field: keyof PasswordVisibility) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field], // Toggle visibility of the given field
    }));
  };

  // Password validation function
  const validatePassword = (value: string) => {
    setPassword(value);
    setIsValidLength(value.length >= 8);
    setHasNumber(/\d/.test(value));
    setHasUppercase(/[A-Z]/.test(value));
  };

  // Handle confirm password validation
  const validateConfirmPassword = (value: string) => {
    setConfirmPassword(value);
    setPasswordsMatch(value === password);
  };

  return (
    <>
      <Image
        source={require("@/assets/images/bg-2.png")}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
        }}
      />
      <SafeAreaView className="flex w-full max-w-[90%] mx-auto z-20 flex-col justify-center ">
        {/* Logo Image */}
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
        <View className="flex w-full mt-3 mb-7 flex-col ">
          <H1 className="mb-2 text-left">Create new password</H1>
          <Text className="text-[rgba(255,255,255,0.5)] text-[14px]">
            We have sent the code to test@gmail.com
          </Text>
        </View>
        <View className="flex flex-col gap-4 w-full justify-between">
          {/* New Password Field */}
          <View>
            <Text className="text-white text-[16px] mb-2 ml-2">
              New Password
            </Text>
            <View className="bg-card border w-full flex-row items-center border-border rounded-full px-[20px] gap-[6px] text-center ">
              <TextInput
                placeholder="**********"
                placeholderTextColor="rgba(255,255,255,0.4)"
                secureTextEntry={!passwordVisibility.newPasswordVisible} // Use the state to toggle visibility
                style={{
                  color: "white",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 16, // Adjust font size
                  lineHeight: 20, // Set line height for better vertical centering
                  textAlignVertical: "center", // Ensure vertical text centering
                  paddingVertical: 12, // Consistent vertical padding for proper alignment
                  height: 50, // Fix height to ensure vertical centering
                  flex: 1, // Allow the input to expand to fill available space
                }}
                value={password} // Controlled input
                onChangeText={validatePassword} // Validate password input
                className="w-[90%]"
              />
              <TouchableOpacity
                onPress={() => toggleVisibility("newPasswordVisible")}
              >
                {passwordVisibility.newPasswordVisible ? (
                  <Eye size={24} color="rgba(255,255,255,0.4)" />
                ) : (
                  <EyeSlash size={24} color="rgba(255,255,255,0.4)" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Confirm Password Field */}
          <View>
            <Text className="text-white text-[16px] mb-2 ml-2">
              Confirm Password
            </Text>
            <View className="bg-card border w-full flex-row items-center border-border rounded-full px-[20px] gap-[6px] text-center ">
              <TextInput
                placeholder="**********"
                placeholderTextColor="rgba(255,255,255,0.4)"
                secureTextEntry={!passwordVisibility.confirmPasswordVisible} // Use the state to toggle visibility
                style={{
                  color: "white",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 16, // Adjust font size
                  lineHeight: 20, // Set line height for better vertical centering
                  textAlignVertical: "center", // Ensure vertical text centering
                  paddingVertical: 12, // Consistent vertical padding for proper alignment
                  height: 50, // Fix height to ensure vertical centering
                  flex: 1, // Allow the input to expand to fill available space
                }}
                value={confirmPassword} // Controlled input
                onChangeText={validateConfirmPassword} // Validate confirm password input
                className="w-[90%]"
              />
              <TouchableOpacity
                onPress={() => toggleVisibility("confirmPasswordVisible")}
              >
                {passwordVisibility.confirmPasswordVisible ? (
                  <Eye size={24} color="rgba(255,255,255,0.4)" />
                ) : (
                  <EyeSlash size={24} color="rgba(255,255,255,0.4)" />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Password Validation */}
        <View className="flex flex-col gap-3 mt-8">
          <View className="flex flex-row gap-2 items-center justify-start">
            {isValidLength ? (
              <TickCircle size={24} color="green" />
            ) : (
              <CloseCircle size={24} color="red" />
            )}
            <Text
              style={{
                color: isValidLength ? "green" : "red",
                fontSize: 16,
              }}
            >
              At least 8 characters
            </Text>
          </View>
          <View className="flex flex-row gap-2 items-center justify-start">
            {hasNumber ? (
              <TickCircle size={24} color="green" />
            ) : (
              <CloseCircle size={24} color="red" />
            )}
            <Text
              style={{
                color: hasNumber ? "green" : "red",
                fontSize: 16,
              }}
            >
              At least 1 number
            </Text>
          </View>
          <View className="flex flex-row gap-2 items-center justify-start">
            {hasUppercase ? (
              <TickCircle size={24} color="green" />
            ) : (
              <CloseCircle size={24} color="red" />
            )}
            <Text
              style={{
                color: hasUppercase ? "green" : "red",
                fontSize: 16,
              }}
            >
              At least 1 uppercase letter
            </Text>
          </View>
          <View className="flex flex-row gap-2 items-center justify-start">
            {passwordsMatch ? (
              <TickCircle size={24} color="green" />
            ) : (
              <CloseCircle size={24} color="red" />
            )}
            <Text
              style={{
                color: passwordsMatch ? "green" : "red",
                fontSize: 16,
              }}
            >
              Passwords match
            </Text>
          </View>
        </View>
      </SafeAreaView>
      <Button className="py-4 absolute bottom-4 left-4 right-4 z-30">
        Send Code
      </Button>
    </>
  );
}

// Add custom styles to manage the image size, bell button, and blur effect
const styles = StyleSheet.create({
  logo: {
    width: 160, // Set the desired width of the logo
    height: 80, // Set the desired height of the logo
    resizeMode: "contain", // Ensure the image maintains its aspect ratio
    alignSelf: "center",
  },
});
