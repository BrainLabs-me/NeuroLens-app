import { ReactNode } from "react";
import { TextInput, View } from "react-native";

type InputType = {
  onChange: any;
  icon: ReactNode;
  children: ReactNode;
};
export default function Input(props: InputType) {
  return (
    <View className="flex flex-col p-3 items-center gap-3 border rounded-full">
      {props.icon}
      <TextInput onChangeText={props.onChange}>{props.children}</TextInput>
    </View>
  );
}
