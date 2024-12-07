import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Text as RnText } from "react-native";
import { TextProps } from "react-native";

type FontWeight = "regular" | "medium" | "bold";

interface TextType extends TextProps {
  weight?: FontWeight;
  children: React.ReactNode;
  className?: string;
}

const fonts = {
  regular: { font: "Poppins_400Regular" },
  medium: { font: "Poppins_500Medium" },
  bold: { font: "Poppins_700Bold" },
};

export default function H1(props: TextType) {
  const font = fonts[props.weight || "regular"].font;
  return (
    <RnText
      style={{ fontFamily: font, lineHeight: 30 }}
      className={cn("text-white text-[30px] text-center pt-5", props.className)}
    >
      {props.children}
    </RnText>
  );
}

export function P(props: TextType) {
  const font = fonts[props.weight || "regular"].font;
  return (
    <RnText
      style={{ fontFamily: font, lineHeight: 35 }}
      className="text-[rgba(255,255,255,0.5)] text-[14px] text-center"
    >
      {props.children}
    </RnText>
  );
}
