import React, { useEffect, useState } from "react";
import { View, PermissionsAndroid, Image } from "react-native";
import { mediaDevices, RTCPeerConnection } from "react-native-webrtc";
import axios from "axios";
import Button from "@/components/ui/button";
import {
  ArrowLeft,
  Call,
  Microphone,
  Setting2,
  Video,
} from "iconsax-react-native";
import { router } from "expo-router";
import Constants from "expo-constants";
// import InCallManager from "react-native-incall-manager";
export default function Page() {
  // useEffect(() => {
  //   requestPermissions();
  // }, []);
  // const [peer, setPeer] = useState();
  // const requestPermissions = async () => {
  //   try {
  //     await PermissionsAndroid.requestMultiple([
  //       PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  //       PermissionsAndroid.PERMISSIONS.CAMERA,
  //       PermissionsAndroid.PERMISSIONS.PROCESS_OUTGOING_CALLS,
  //       PermissionsAndroid.PERMISSIONS.CALL_PHONE,
  //     ]);
  //     InCallManager.start({ media: "audio" });
  //     //InCallManager.setSpeakerphoneOn(true);
  //     InCallManager.setForceSpeakerphoneOn(true);
  //     //  InCallManager.chooseAudioRoute("SPEAKER_PHONE");
  //   } catch (error) {
  //     console.error("Error requesting permissions:", error);
  //   }
  // };

  // const initCall = async () => {
  //   try {
  //     // Fetch token
  //     const tokenResponse = await axios.get(
  //       "https://app.neurolens.me/api/session"
  //     );
  //     const EPHEMERAL_KEY = tokenResponse.data.client_secret.value;
  //     console.log(tokenResponse);
  //     // Initialize PeerConnection
  //     const config = {
  //       iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
  //     };
  //     const pc = new RTCPeerConnection(config);
  //     console.log("nova konekcija");
  //     setPeer(pc);
  //     // Set remote stream handler
  //     pc.ontrack = (event) => {
  //       if (event.streams && event.streams[0]) {
  //       }
  //     };

  //     const stream = await mediaDevices.getUserMedia({
  //       audio: {
  //         deviceId: "SPEAKER_PHONE",
  //       },
  //       video: false,
  //     });
  //     console.log(await mediaDevices.enumerateDevices());
  //     stream.getTracks().forEach((track) => pc.addTrack(track, stream));

  //     // Setup data channel
  //     const dc = pc.createDataChannel("oai-events");
  //     dc.onmessage = (e) => {
  //       console.log("Data Channel Message:", e.data);
  //     };

  //     // Create offer and start session
  //     const offer = await pc.createOffer();
  //     await pc.setLocalDescription(offer);

  //     const baseUrl = "https://api.openai.com/v1/realtime";
  //     const model = "gpt-4o-realtime-preview-2024-12-17";
  //     const sdpResponse = await axios.post(
  //       `${baseUrl}?model=${model}`,
  //       offer.sdp,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${EPHEMERAL_KEY}`,
  //           "Content-Type": "application/sdp",
  //         },
  //       }
  //     );

  //     const answer = {
  //       type: "answer",
  //       sdp: sdpResponse.data,
  //     };

  //     await pc.setRemoteDescription(answer);
  //   } catch (error) {
  //     console.error("Error initializing the call:", error);
  //   }
  // };

  // useEffect(() => {
  //   initCall();
  // }, []);
  return (
    <View className="h-full bg-background">
      <Image
        source={require("@/assets/images/Assistaint_bg.png")}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
        }}
      ></Image>
      <View
        style={{ top: Constants.statusBarHeight }}
        className=" absolute w-full h-24 z-10 px-5"
      >
        <Button
          onPress={() => router.back()}
          type="secondary"
          className="aspect-square w-20 justify-center items-center h-20 "
        >
          <ArrowLeft color="white"></ArrowLeft>
        </Button>
      </View>
      <View className="flex-1  rounded-b-[3rem] overflow-hidden bg-blue-50">
        <Image
          source={require("@/assets/images/assistaint.png")}
          className="w-full h-full   object-cover"
        ></Image>
      </View>
      <View className="h-44  w-full flex-row justify-between p-5 gap-3">
        <Button
          type="secondary"
          className="py-0 p-2 justify-center items-center flex-1 aspect-square"
        >
          <Setting2 color="white"></Setting2>
        </Button>
        <Button
          type="secondary"
          className="py-0 p-2 justify-center items-center flex-1 aspect-square"
        >
          <Microphone color="white"></Microphone>
        </Button>
        <Button
          type="secondary"
          className="py-0 p-2 justify-center items-center flex-1 aspect-square"
        >
          <Video color="white"></Video>
        </Button>
        <Button
          type="secondary"
          className="py-0 p-2 justify-center bg-red-500 items-center flex-1 aspect-square"
        >
          <Call color="white"></Call>
        </Button>
      </View>
    </View>
  );
}
