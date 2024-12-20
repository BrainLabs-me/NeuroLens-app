import { Profile } from "iconsax-react-native";
import { ReactNode } from "react";
import { TextInput, View } from "react-native";
import React from "react";
import { Text } from "react-native";

type InputType = {
  onChange?: (text: string) => void;
  icon?: ReactNode;
  placeholder?: string; // Add placeholder as a prop
  subtitle?: string; // Add subtitle as a prop
};

export default function Input({
  onChange,
  icon,
  placeholder,
  subtitle,
}: InputType) {
  return (
    <View>
      {subtitle && (
        <Text className="text-white text-[16px] mb-2 ml-2">{subtitle}</Text>
      )}

      <View className="bg-card border w-full flex-row items-center border-border rounded-full px-[20px] gap-[6px] text-center ">
        {icon || <Profile size={24} color="rgba(255,255,255,0.4)" />}
        <TextInput
          placeholder={placeholder} // Use placeholder prop here
          placeholderTextColor="rgba(255,255,255,0.4)" // Placeholder text color
          style={{ color: "white", fontFamily: "Poppins_400Regular" }}
          className="text-[16px] translate-y-[.15rem] w-[90%]"
          onChangeText={onChange}
        />
      </View>
    </View>
  );
}
