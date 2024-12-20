import Card from "@/components/ui/card";
import H1, { P } from "@/components/ui/text";
import {
  ArrowRight,
  ArrowRight2,
  Brush,
  Brush2,
  Brush3,
  BrushBig,
  Logout,
  Notification,
  Notification1,
  SecuritySafe,
  SecurityUser,
} from "iconsax-react-native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GLView } from "expo-gl";

export default function Page() {
  return (
    <>
      <Image
        source={require("@/assets/images/bg-3.png")}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
        }}
      ></Image>
      <SafeAreaView className="flex-1 gap-5 bg-transparent pt-16 items-center justify-start z-50 px-[20px]">
        <View>
          <Image
            source={require("@/assets/images/profile.png")}
            className="rounded-full w-44 h-44"
            style={{}}
          ></Image>
          <H1 className="li">Username</H1>
          <P>user@neurolense.me</P>
        </View>
        <Card className="text-center justify-center items-center mt-5">
          <TouchableOpacity className="flex-row items-center justify-between w-full">
            <View className="flex-row items-center gap-3">
              <SecuritySafe color="white" size={28}></SecuritySafe>
              <P className="text-[16px]">Secyurity</P>
            </View>
            <ArrowRight2 color="white" size={28}></ArrowRight2>
          </TouchableOpacity>
          <View className="h-[1px] bg-border w-[88%] "></View>
          <TouchableOpacity className="flex-row items-center justify-between w-full">
            <View className="flex-row items-center gap-3">
              <SecurityUser color="white" size={28}></SecurityUser>
              <P className="text-[16px]">Privacy Policy</P>
            </View>
            <ArrowRight2 color="white" size={28}></ArrowRight2>
          </TouchableOpacity>
          <View className="h-[1px] bg-border w-[88%] "></View>

          <TouchableOpacity className="flex-row items-center justify-between w-full">
            <View className="flex-row items-center gap-3">
              <BrushBig color="white" size={28}></BrushBig>
              <P className="text-[16px]">Theme</P>
            </View>
            <ArrowRight2 color="white" size={28}></ArrowRight2>
          </TouchableOpacity>
          <View className="h-[1px] bg-border w-[88%] "></View>

          <TouchableOpacity className="flex-row items-center justify-between w-full">
            <View className="flex-row items-center gap-3">
              <Notification1 color="white" size={28}></Notification1>
              <P className="text-[16px]">Notifications</P>
            </View>
            <ArrowRight2 color="white" size={28}></ArrowRight2>
          </TouchableOpacity>
        </Card>
        <Card className="py-3">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-3">
              <Logout color="white" size={28}></Logout>
              <P className="text-[16px]">Log out</P>
            </View>
            <ArrowRight2 color="white" size={28}></ArrowRight2>
          </View>
        </Card>
      </SafeAreaView>
    </>
  );
}
