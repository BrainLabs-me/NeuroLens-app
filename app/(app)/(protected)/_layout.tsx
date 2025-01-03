import { useUser } from "@/context/userContext";
import { useToken } from "@/hooks/useToken";
import { Redirect, Slot, Stack } from "expo-router";
import { View } from "react-native";

export default function protectedLayout() {
  const { user, loading } = useUser();
  const { token } = useToken();

  if (loading) {
    return <View className="w-full h-full bg-background"></View>;
  } else if (user) {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="/(app)/device"
          options={{
            animation: "slide_from_bottom",
            presentation: "containedTransparentModal",
          }}
        ></Stack.Screen>
      </Stack>
    );
  } else {
    return <Redirect href={"/(app)/start"} />;
  }
}
