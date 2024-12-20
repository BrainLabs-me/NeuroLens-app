import { cn } from "@/lib/utils";
import { View } from "react-native";

export default function Card(props: any) {
  return (
    <View
      className={cn(
        "border border-border gap-3 bg-card rounded-[30px] p-4  py-4  w-full ",
        props.className
      )}
    >
      {props.children}
    </View>
  );
}
