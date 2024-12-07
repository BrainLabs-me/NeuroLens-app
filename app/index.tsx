import Button from "@/components/ui/button";
import { View, TouchableOpacity, Text } from "react-native";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Sms } from "iconsax-react-native";
import H1, { P } from "@/components/ui/text";
export default function IndexPage() {
  return (
    <SafeAreaView className="flex-1 bg-[#05051E]  relative gap-7  pt-12">
      <Image
        source={require("@/assets/images/bg.png")}
        style={{ width: "100%", height: "100%", position: "absolute", top: 0 }}
      ></Image>
      <Image
        source={require("@/assets/images/banner.png")}
        style={{ flex: 1, width: "100%", objectFit: "contain" }}
      ></Image>

      <View className="px-5 gap-3">
        <H1>Relax and achieve {"\n"} greater peace of mind</H1>
        <P>Relax and achieve greater peace of mind</P>
        <View className="flex flex-row gap-3">
          <TouchableOpacity className="bg-[rgba(255,255,255,0.1)] gap-2 flex flex-row items-center justify-center border border-[rgba(255,255,255,0.1)] rounded-full flex-1 text-center py-3">
            <Image
              source={require("@/assets/images/google.png")}
              className="w-7 h-7"
            ></Image>
            <Text
              style={{ fontFamily: "Poppins_500Medium" }}
              className="text-white text-center text-[16px]"
            >
              Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[rgba(255,255,255,0.1)] gap-2 flex flex-row items-center justify-center border border-[rgba(255,255,255,0.1)] rounded-full flex-1 text-center py-3">
            <Sms size="30" color="#fff" />

            <Text
              style={{ fontFamily: "Poppins_500Medium" }}
              className="text-white text-center text-[16px]"
            >
              Email
            </Text>
          </TouchableOpacity>
        </View>
        <Button>Start without account</Button>
      </View>
      <Text
        className="text-white text-center font-bold"
        style={{ fontFamily: "Poppins_500Medium" }}
      >
        Don’t have an account?{" "}
        <Text
          className="text-primary"
          style={{ fontFamily: "Poppins_700Bold" }}
        >
          Register
        </Text>
      </Text>
    </SafeAreaView>
  );
}
