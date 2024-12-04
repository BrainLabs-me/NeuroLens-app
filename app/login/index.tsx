import { TouchableOpacity, View } from "react-native";

export default function Page() {
  return (
    <View style={{ borderWidth: 1, borderColor: "red" }}>
      <TouchableOpacity onPress={() => Login()}></TouchableOpacity>
    </View>
  );
}
