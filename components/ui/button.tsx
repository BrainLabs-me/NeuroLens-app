import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import {
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  ActivityIndicator,
  View,
} from "react-native";

type ButtonType = {
  onPress?: (event: GestureResponderEvent) => void;
  type?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  loading?: boolean;
  icon?: ReactNode;
};
export default function Button(props: ButtonType) {
  const styles = {
    primary: "bg-primary rounded-full border-border text-center py-5",
    secondary: "bg-card border border-border rounded-full  text-center ",
  };
  return (
    <TouchableOpacity
      className={cn(styles[props.type || "primary"], props.className)}
      onPress={props.onPress}
    >
      {props.icon}
      <Text
        style={{ fontFamily: "Poppins_500Medium", includeFontPadding: false }}
        className="text-white justify-center  text-center items-center text-[16px]"
      >
        {props.loading ? (
          <View className="justify-center items-center w-full">
            <ActivityIndicator color={"white"}></ActivityIndicator>
          </View>
        ) : (
          props.children
        )}
      </Text>
    </TouchableOpacity>
  );
}
