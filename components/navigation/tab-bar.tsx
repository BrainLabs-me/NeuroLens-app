import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { BlurView } from "expo-blur";
import Svg, { Mask, Path } from "react-native-svg";
import Nav from "@/assets/svg/nav";
import { Bubble, Home } from "iconsax-react-native";
import { router } from "expo-router";
export default function TabBar({
  state,
  navigation,
  descriptors,
}: {
  state: any;
  navigation: any;
  descriptors: any;
}) {
  const [routes, setRoutes] = useState(state.routes);
  useEffect(() => {
    setRoutes(() => {
      const newRoutes = [...state.routes];
      const newObject = {
        key: "new-abc123",
        name: "new",
        params: undefined,
        options: "",
      }; // Novi objekat
      newRoutes.splice(2, 0, newObject); // Ubacujemo na indeks 2
      console.log(newRoutes);
      return newRoutes; // Vraćamo ažurirani niz
    });
  }, [state.routes]);
  return (
    <>
      <View className="absolute bottom-8 w-full z-20">
        <View className="w-full scale-105 justify-center items-center">
          <View className="absolute z-40">
            <Nav></Nav>
          </View>
          <MaskedView
            style={styles.maskedView}
            maskElement={
              <View className="flex-1 justify-center items-center bg-transparent">
                <Svg width={299} height={62} viewBox="0 0 299 62" fill="none">
                  <Mask id="a" fill="#fff">
                    <Path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M149 27a26.892 26.892 0 0017.019-6.038C176.304 12.602 186.745 0 200 0h68c17.121 0 31 13.88 31 31 0 17.12-13.879 31-31 31H31C13.88 62 0 48.12 0 31 0 13.88 13.88 0 31 0h67c13.255 0 23.696 12.602 33.981 20.962A26.892 26.892 0 00149 27z"
                    />
                  </Mask>
                  <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M149 27a26.892 26.892 0 0017.019-6.038C176.304 12.602 186.745 0 200 0h68c17.121 0 31 13.88 31 31 0 17.12-13.879 31-31 31H31C13.88 62 0 48.12 0 31 0 13.88 13.88 0 31 0h67c13.255 0 23.696 12.602 33.981 20.962A26.892 26.892 0 00149 27z"
                    fill="#fff"
                  />
                  <Path
                    d="M165.388 20.186A25.89 25.89 0 01149 26v2a27.888 27.888 0 0017.649-6.262l-1.261-1.552zM200 1h68v-2h-68v2zm68 0c16.569 0 30 13.431 30 30h2c0-17.673-14.327-32-32-32v2zm30 30c0 16.569-13.431 30-30 30v2c17.673 0 32-14.327 32-32h-2zm-30 30H31v2h237v-2zM31 61C14.431 61 1 47.569 1 31h-2c0 17.673 14.327 32 32 32v-2zM1 31C1 14.431 14.431 1 31 1v-2C13.327-1-1 13.327-1 31h2zM31 1h67v-2H31v2zm118 25a25.89 25.89 0 01-16.388-5.814l-1.261 1.552A27.888 27.888 0 00149 28v-2zM98 1c6.302 0 12.01 2.995 17.501 7.144 2.741 2.07 5.397 4.405 8.029 6.76 2.621 2.348 5.226 4.725 7.821 6.834l1.261-1.552c-2.547-2.07-5.105-4.404-7.748-6.771-2.634-2.358-5.344-4.742-8.157-6.867C111.093 2.306 104.953-1 98-1v2zm68.649 20.738c2.595-2.11 5.2-4.486 7.821-6.833 2.632-2.356 5.288-4.69 8.029-6.761C187.99 3.994 193.698 1 200 1v-2c-6.953 0-13.093 3.306-18.707 7.548-2.813 2.125-5.523 4.509-8.157 6.867-2.643 2.367-5.201 4.7-7.748 6.771l1.261 1.552z"
                    fill="#fff"
                    fillOpacity={0.15}
                    mask="url(#a)"
                  />
                </Svg>
              </View>
            }
          >
            <View style={styles.backgroundContainer}>
              <BlurView
                tint="light"
                experimentalBlurMethod="none"
                style={styles.blurContainer}
                intensity={20}
              ></BlurView>
            </View>
          </MaskedView>
          <View className="absolute z-40  flex-row justify-between items-center w-full px-[60px]">
            {routes.map((route: any, index: number) => {
              if (index === 2) {
                return (
                  <TouchableOpacity
                    onPress={() => router.push("/chat")}
                    key={index}
                    className="bg-primary shadow-gray-50 shadow-sm border-border border rounded-full translate-y-[-47px] p-4"
                  >
                    <Bubble color="white" size={32}></Bubble>
                  </TouchableOpacity>
                );
              } else {
                const { options } = descriptors[route.key];
                let isFocused = state.index === index;
                if (index > 2) {
                  isFocused = state.index === index - 1;
                }
                return (
                  <TouchableOpacity
                    key={index}
                    className=" p-3"
                    onPress={() =>
                      navigation.navigate(route.name, route.params)
                    }
                  >
                    {options.tabBarIcon({
                      color: "white",
                      focused: isFocused,
                    })}
                  </TouchableOpacity>
                );
              }
            })}
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  maskedView: {
    flex: 1,
    width: "100%",
  },
  mask: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  maskText: {
    fontSize: 60,
    color: "black",
    fontWeight: "bold",
  },
  backgroundContainer: {
    flex: 1,
    height: "100%",
  },
  blurContainer: {
    height: 65,
    overflow: "hidden",
  },
});
