import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

export default function IndexPage() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Hello! I am starting from Home</Text>
      <StatusBar style="auto" />
      <Link href="/(tabs)" style={{ color: "blue" }}>
        Go To Profile
      </Link>
    </View>
  );
}
