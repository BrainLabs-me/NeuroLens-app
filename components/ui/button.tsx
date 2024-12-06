import { ReactNode } from "react";
import { TouchableOpacity, Text } from "react-native";

type ButtonType = {
  onPress?: any;
  children: ReactNode;
};
export default function Button(props: ButtonType) {
  return (
    <TouchableOpacity
      className="bg-primary rounded-full w-full text-center py-5"
      onPress={props.onPress}
      style={{ backgroundColor: "#6747ED", width: "100%" }}
    >
      <Text
        style={{ fontFamily: "Poppins_500Medium" }}
        className="text-white text-center text-[16px]"
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}
