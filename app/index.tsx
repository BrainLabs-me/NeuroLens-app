import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

export default function IndexPage() {
  return (
    <View className="bg-red-500 flex-1">
      <Text className="text-3xl text-white">
        Hello! I am starting from Home
      </Text>
      <View className="absolute w-24 h-24 bg-black/20 rounded-xl"></View>
      <StatusBar style="auto" />
      <Link href="/(tabs)" style={{ color: "blue" }}>
        Go To Profile
      </Link>
    </View>
  );
}
