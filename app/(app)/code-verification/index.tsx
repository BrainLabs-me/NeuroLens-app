import {
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useRef, useEffect } from "react";
import { Text } from "react-native";
import H1 from "@/components/ui/text";
import Button from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function Page() {
  const { t, i18n } = useTranslation();
  const [code, setCode] = useState(""); // Single string for the code
  const [timer, setTimer] = useState(60); // 1-minute timer
  const [resendEnabled, setResendEnabled] = useState(false); // Resend button state
  const [message, setMessage] = useState(""); // Success message
  const inputRef = useRef<TextInput | null>(null); // Ref for the hidden text input

  // Timer logic
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
    setResendEnabled(true); // Enable resend after timer ends
  }, [timer]);

  // Resend code handler
  const handleResendCode = () => {
    setTimer(60); // Reset timer
    setResendEnabled(false);
    setMessage(t("code-verification.resend-success"));
    setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
  };

  // Handle input change
  const handleInputChange = (text: string) => {
    const sanitizedText = text.replace(/[^0-9]/g, ""); // Allow only numbers
    setCode(sanitizedText.slice(0, 5)); // Limit to 5 digits
  };

  // Handle box click
  const handleBoxClick = () => {
    inputRef.current?.focus(); // Focus the hidden text input
  };

  // Handle form submission
  const handleSubmit = () => {
    //bzvz nesto
    if (code.length === 5) {
      Alert.alert("Verification Code", `Your code is: ${code}`);
    } else {
      Alert.alert("Error", "Please enter a 5-digit code.");
    }
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
      <SafeAreaView className="flex w-full max-w-[90%] mx-auto z-20 flex-col justify-center items-center">
        {/* Logo Image */}
        <Image
          source={require("@/assets/images/logo_horizontal.png")}
          style={styles.logo}
        />
        <View className="flex w-full mt-3 mb-7 flex-col ">
          <H1 className="mb-2 text-left">{t("code-verification.title")}</H1>
          <Text className="text-[rgba(255,255,255,0.5)] text-[14px]">
            {t("code-verification.subtitle") + "test@gmail.com"}
          </Text>
        </View>

        {/* Code Input */}
        <View
          className="flex flex-row gap-4 justify-center items-center mt-4"
          onTouchStart={handleBoxClick}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <View
              key={index}
              style={{
                width: 60,
                height: 60,
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.5)",
                borderRadius: 10,
                backgroundColor: "rgba(255,255,255,0.1)",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  color: "white",
                }}
              >
                {code[index] || ""}
              </Text>
            </View>
          ))}
        </View>
        <TextInput
          ref={inputRef}
          value={code}
          onChangeText={handleInputChange}
          keyboardType="numeric"
          maxLength={5}
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            opacity: 0,
          }}
        />

        {/* Timer or Resend */}
        <Text className="text-gray-600 mt-3">
          {resendEnabled ? (
            <TouchableOpacity onPress={handleResendCode}>
              <Text className="font-bold text-primary">
                {t("code-verification.secondary-action")}
              </Text>
            </TouchableOpacity>
          ) : (
            <>
              {t("code-verification.timer")}{" "}
              <Text className="font-bold text-white">
                {`00:${timer.toString().padStart(2, "0")}`}
              </Text>
            </>
          )}
        </Text>

        {/* Success Message */}
        {message ? (
          <Text className="text-green-500 mt-2">{message}</Text>
        ) : null}
      </SafeAreaView>

      {/* Verification Button */}
      <Button
        className="py-4 absolute bottom-4 left-4 right-4"
        onPress={handleSubmit}
      >
        {t("code-verification.action")}
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
  },
});
