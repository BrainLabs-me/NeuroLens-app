// import React, { useEffect, useRef } from "react";
// import { StyleSheet, TouchableOpacity, View } from "react-native";
// import {
//   ArrowLeft,
//   BatteryEmpty,
//   Bluetooth,
//   Electricity,
//   Notification,
//   RotateLeft,
// } from "iconsax-react-native";
// import H1, { P } from "@/components/ui/text";
// import { Image } from "expo-image";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withRepeat,
//   withTiming,
// } from "react-native-reanimated";
// import { router } from "expo-router";
// import { SafeAreaView } from "react-native-safe-area-context";
// import useBLE from "@/hooks/useBle";
// import Card from "@/components/ui/card";
// import Button from "@/components/ui/button";
// import LottieView from "lottie-react-native";

// export default function App() {
//   const scale = useSharedValue(1);
//   const { allDevices, scanning, state, connectToDevice, scanForPeripherals } =
//     useBLE();
//   useEffect(() => {
//     scale.value = withRepeat(withTiming(1.2, { duration: 1000 }), -1, true);
//   }, []);
//   const translateY = useSharedValue(150);
//   const opacity = useSharedValue(0);

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ translateY: translateY.value }],
//       opacity: opacity.value,
//     };
//   });

//   useEffect(() => {
//     if (allDevices.length > 0) {
//       translateY.value = withTiming(0, { duration: 1000 });
//       opacity.value = withTiming(1, { duration: 1000 });
//     }
//   }, [allDevices]);

//   return (
//     <>
//       <Image
//         transition={200}
//         source={require("@/assets/images/bg-2.png")}
//         style={{
//           transform: [{ scale: 1.0 }],
//           width: "100%",
//           height: "100%",
//           position: "absolute",
//           top: 0,
//         }}
//       ></Image>
//       <SafeAreaView className="flex-1 px-5 pb-5">
//         <View className="flex-row justify-between w-full items-center ">
//           <TouchableOpacity
//             onPress={() => router.back()}
//             className="items-center justify-center"
//           >
//             <ArrowLeft size={32} color="white"></ArrowLeft>
//           </TouchableOpacity>
//           <P className="text-2xl text-white">Bluetooth</P>
//           <Button
//             onPress={() => scanForPeripherals()}
//             type="secondary"
//             className="aspect-square w-16 justify-center items-center h-16 "
//           >
//             <Notification color="white"></Notification>
//           </Button>
//         </View>
//         <View className="flex-1 gap-5 mb-12 justify-center items-center">
//           <Animated.View
//             style={[
//               {
//                 backgroundColor: "#2D3748",
//                 borderColor: "#718096",
//                 borderWidth: 1,
//                 padding: 40,
//                 borderRadius: 100,
//               },
//             ]}
//           >
//             <Bluetooth color="white" size={60} />
//           </Animated.View>
//           {/* <View className="justify-center items-center">
//             <LottieView
//               autoPlay
//               ref={animation}
//               style={{
//                 width: 350,
//                 height: 350,
//                 opacity: 0.7,
//               }}
//               // Find more Lottie files at https://lottiefiles.com/featured
//               source={require("@/assets/TZXdLIDPXe (1).json")}
//             />
//             <View className="absolute">
//               <Bluetooth color="white" size={60} />
//             </View>
//           </View> */}
//           <View>
//             <H1 className="text-3xl">
//               {state === "PoweredOn"
//                 ? "Searching for devices.."
//                 : "Bluetooth is turned OFF"}
//             </H1>
//             <P>
//               {state === "PoweredOn"
//                 ? "Searching for devices.."
//                 : "Bluetooth is turned OFF"}
//             </P>
//           </View>
//           {allDevices.map((e, index) => {
//             return (
//               <Animated.View
//                 className={"w-full"}
//                 key={index}
//                 style={[animatedStyle]}
//               >
//                 <TouchableOpacity onPress={() => connectToDevice(e)}>
//                   <Card className="p-3 pb-3 justify-between   flex-row">
//                     <View className="gap-3">
//                       <View className="flex-row items-center gap-2">
//                         <View className="p-2 bg-card border justify-center items-center border-border rounded-full">
//                           <Bluetooth color="white"></Bluetooth>
//                         </View>
//                         <P className="text-left text-xl text-white">{e.name}</P>
//                       </View>
//                       {/*   */}
//                     </View>
//                     {/* <Image
//                       contentFit="contain"
//                       source={require("@/assets/images/device.png")}
//                       style={{
//                         width: 100,
//                         height: 80,
//                       }}
//                     ></Image> */}
//                   </Card>
//                 </TouchableOpacity>
//               </Animated.View>
//             );
//           })}
//         </View>
//         {/* <Button onPress={() => scanForPeripherals()} className="w-full">
//           Scan again
//         </Button> */}
//       </SafeAreaView>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   box: {
//     width: 200,
//     height: 200,
//     backgroundColor: "skyblue",
//     borderRadius: 10,
//   },
// });
