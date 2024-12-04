import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";

type ButtonType = {
  onPress: any;
  children: ReactNode;
};
export default function Button(props: ButtonType) {
  return (
    <TouchableOpacity
      className="bg-primary rounded-full w-full"
      onPress={props.onPress}
    >
      {props.children}
    </TouchableOpacity>
  );
}
