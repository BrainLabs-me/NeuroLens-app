import { cn } from "@/lib/utils";
import { Profile } from "iconsax-react-native";
import { ReactNode } from "react";
import { TextInput, View } from "react-native";

type InputType = {
  onChange?: any;
  icon?: ReactNode;
  children?: ReactNode;
};
export default function Input(props: InputType) {
  return (
    <View className="bg-card border flex-row items-center  border-border rounded-full px-[20px] gap-[6px]  text-center py-5">
      {props.icon}
      <Profile size={26} color="rgba(255,255,255,0.4)"></Profile>
      <TextInput
        placeholder="Email"
        style={{ color: "white", fontFamily: "Poppins_400Regular" }}
        className={cn(
          "placeholder:color-text-secondary  flex-1 placeholder:text-[16px]"
        )}
        onChangeText={props.onChange}
      >
        {props.children}
      </TextInput>
    </View>
  );
}
