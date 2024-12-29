import { cn } from "@/lib/utils";
import { Profile } from "iconsax-react-native";
import { ReactNode } from "react";
import { TextInput, View } from "react-native";
import { P } from "./text";

type InputType = {
  onChange?: any;
  label?: string;
  placeholder?: string;
  icon?: ReactNode;
  children?: ReactNode;
};
export default function Input(props: InputType) {
  return (
    <View className="gap-1">
      {props.label && (
        <P className="text-left text-white text-[16px] ml-1">{props.label}</P>
      )}
      <View className="bg-card border flex-row items-center  border-border rounded-full px-[20px] gap-[6px]  text-center py-4">
        {props.icon}
        <TextInput
          placeholder={props.placeholder}
          style={{ color: "white", fontFamily: "Poppins_400Regular" }}
          className={cn(
            "placeholder:color-text-secondary  flex-1 placeholder:text-[16px]"
          )}
          onChangeText={props.onChange}
        >
          {props.children}
        </TextInput>
      </View>
    </View>
  );
}
