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
import { useTranslation } from "react-i18next";

// Define the state type for password visibility
interface PasswordVisibility {
  newPasswordVisible: boolean;
  confirmPasswordVisible: boolean;
}

export default function Page() {
  const { t, i18n } = useTranslation();
  // Use the state type for passwordVisibility
  const [passwordVisibility, setPasswordVisibility] =
    useState<PasswordVisibility>({
      newPasswordVisible: false,
      confirmPasswordVisible: false,
    });

  const [password, setPassword] = useState(""); // Track password
  const [confirmPassword, setConfirmPassword] = useState(""); // Track confirm password

  // Password validation criteria
  const validations = [
    {
      label: t("change-password.characters"),
      isValid: password.length >= 8,
    },
    {
      label: t("change-password.numbers"),
      isValid: /\d/.test(password),
    },
    {
      label: t("change-password.uppercase"),
      isValid: /[A-Z]/.test(password),
    },
    {
      label: t("change-password.match"),
      isValid: password === confirmPassword,
    },
  ];

  // Toggle visibility function with proper typing
  const toggleVisibility = (field: keyof PasswordVisibility) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field], // Toggle visibility of the given field
    }));
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
          source={require("@/assets/images/logo_horizontal.png")}
          style={styles.logo}
        />
        <View className="flex w-full mt-3 mb-7 flex-col ">
          <H1 className="mb-2 text-left">{t("change-password.title")}</H1>
          <Text className="text-[rgba(255,255,255,0.5)] text-[14px]">
            {t("code-verification.subtitle")} test@gmail.com
          </Text>
        </View>
        <View className="flex flex-col gap-4 w-full justify-between">
          {/* New Password Field */}
          <View>
            <Text className="text-white text-[16px] mb-2 ml-2">
              {t("change-password.new-password")}
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
                onChangeText={setPassword} // Update password input
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
              {t("change-password.confirm-password")}
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
                onChangeText={setConfirmPassword} // Update confirm password input
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
          {validations.map(({ label, isValid }, index) => (
            <View
              key={index}
              className="flex flex-row gap-2 items-center justify-start"
            >
              {isValid ? (
                <TickCircle size={24} color="green" />
              ) : (
                <CloseCircle size={24} color="red" />
              )}
              <Text
                style={{
                  color: isValid ? "green" : "red",
                  fontSize: 16,
                }}
              >
                {label}
              </Text>
            </View>
          ))}
        </View>
      </SafeAreaView>
      <Button className="py-4 absolute bottom-4 left-4 right-4 z-30">
        {t("change-password.action")}
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
