import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";

type ButtonType = {
  onPress?: (event: GestureResponderEvent) => void;
  type?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
};
export default function Button(props: ButtonType) {
  const styles = {
    primary: "bg-primary rounded-full border-border text-center py-5",
    secondary: "bg-card border border-border rounded-full  text-center py-5",
  };
  return (
    <TouchableOpacity
      className={cn(styles[props.type || "primary"], props.className)}
      onPress={props.onPress}
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
