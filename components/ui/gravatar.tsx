import { splitName } from "@/lib/utils";
import { Text, View } from "react-native";
import H1, { P } from "./text";
import { Image } from "expo-image";

export default function Gravatar({
  name,
  photo,
}: {
  name?: string;
  photo?: string;
  type?: string;
  status?: string;
  profileImage?: string;
}) {
  console.log(photo);
  return (
    <View className="bg-background border border-primary h-[120px] w-[120px]  p-5 aspect-square relative overflow-hidden justify-center  items-center rounded-full ">
      <Image
        source={photo}
        style={{
          width: 120,
          height: 120,
          objectFit: "cover",
          position: "absolute",
        }}
      ></Image>

      {/* <P className="text-[2.3rem] text-white" weight="bold">
        {name && splitName(name)}
      </P> */}
    </View>
  );
}
