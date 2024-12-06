import { ReactNode } from "react";
import { Text as RnText } from "react-native";

type TextType = {
  onChange?: any;
  icon?: ReactNode;
  children?: ReactNode;
};
export default function H1({ children }: TextType) {
  return (
    <RnText
      style={{ fontFamily: "Poppins_400Regular", lineHeight: 35 }}
      className="text-white text-[30px] text-center"
    >
      {children}
    </RnText>
  );
}

export function P({ children }: TextType) {
  return (
    <RnText
      style={{ fontFamily: "Poppins_400Regular", lineHeight: 35 }}
      className="text-[rgba(255,255,255,0.5)] text-[14px] text-center"
    >
      {children}
    </RnText>
  );
}
