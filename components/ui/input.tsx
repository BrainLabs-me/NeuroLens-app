import { cn } from "@/lib/utils";
import { Profile } from "iconsax-react-native";
import { ReactNode, useState } from "react";
import { TextInput, View } from "react-native";
import { P } from "./text";

type InputType = {
  onChange?: any;
  label?: string;
  placeholder?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  error?: string;
};
export default function Input(props: InputType) {
  const [focus, setFocus] = useState(false);

  return (
    <View className="gap-1">
      {props.label && (
        <P className="text-left text-white text-[16px] ml-1">{props.label}</P>
      )}
      <View
        className={cn(
          "bg-card border flex-row items-center  border-border rounded-full px-[20px] gap-[6px]  text-center py-4",
          props.className,
          props.error && "border-red-500",
          focus && " border-primary"
        )}
      >
        {props.icon}
        <TextInput
          placeholder={props.placeholder}
          style={{
            color: "white",
            fontFamily: "Poppins_400Regular",
            includeFontPadding: false,
          }}
          className={cn(
            "placeholder:color-text-secondary  flex-1 placeholder:text-[16px]"
          )}
          onChangeText={props.onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        >
          {props.children}
        </TextInput>
      </View>
      {props.error && (
        <P className="text-xs text-left text-red-500">{props.error}</P>
      )}
    </View>
  );
}
