import { Notification } from "iconsax-react-native";
import { View } from "react-native";
import { Image } from "expo-image";

import React, { useEffect } from "react";

import Button from "@/components/ui/button";
import Constants from "expo-constants";

export default function Header() {
  return (
    <>
      <View
        style={{
          top: Constants.statusBarHeight,
        }}
        className="justify-between absolute  px-5 items-center flex-row w-full  "
      >
        <Image
          contentFit="contain"
          source={require("@/assets/images/logo_horizontal.png")}
          style={{
            width: 170,
            height: 50,
          }}
        ></Image>
        <Button
          type="secondary"
          className="aspect-square w-16 justify-center items-center h-16 "
        >
          <Notification color="white"></Notification>
        </Button>
      </View>
    </>
  );
}
