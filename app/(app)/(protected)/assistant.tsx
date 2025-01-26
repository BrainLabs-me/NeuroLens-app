import React, { useEffect, useState } from "react";
import {
  View,
  PermissionsAndroid,
  Image,
  ActivityIndicator,
} from "react-native";
import { RTCPeerConnection, mediaDevices } from "react-native-webrtc";
import axios from "axios";
import Button from "@/components/ui/button";
import {
  ArrowLeft,
  Call,
  Microphone,
  MicrophoneSlash,
  Setting2,
} from "iconsax-react-native";
import { router } from "expo-router";
import Constants from "expo-constants";
import InCallManager from "react-native-incall-manager";
import { P } from "@/components/ui/text";
import { useAudioPlayer } from "expo-audio";
export default function Page() {
  const [peer, setPeer] = useState<RTCPeerConnection>();
  const [mute, setMute] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const player = useAudioPlayer(
    require("@/assets/sounds/wind-up-tone-effect-240240.mp3")
  );
  const requestPermissions = async () => {
    try {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.PROCESS_OUTGOING_CALLS,
        PermissionsAndroid.PERMISSIONS.CALL_PHONE,
      ]);
    } catch (error) {
      console.error("Error requesting permissions:", error);
    }
  };
  useEffect(() => {
    requestPermissions();
  }, []);
  async function initCall() {
    try {
      player.volume = 5;
      player.play();

      const tokenResponse = await axios.get(
        "https://app.neurolens.me/api/session/me"
      );
      const EPHEMERAL_KEY = tokenResponse.data.client_secret.value;

      const config = {
        iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
      };

      const pc: RTCPeerConnection = new RTCPeerConnection(config);
      setPeer(pc);

      const stream = await mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });

      stream.getTracks().forEach((track) => pc.addTrack(track, stream));
      const dc: any = pc.createDataChannel("oai-events");
      dc.onmessage = (e: any) => {
        console.log("Data Channel Message:", e.data);
      };
      let sessionConstraints = {
        mandatory: {
          OfferToReceiveAudio: true,
          VoiceActivityDetection: true,
        },
      };
      const offer = await pc.createOffer(sessionConstraints);
      await pc.setLocalDescription(offer);

      const baseUrl = "https://api.openai.com/v1/realtime";
      const model = "gpt-4o-realtime-preview-2024-12-17";
      const sdpResponse = await axios.post(
        `${baseUrl}?model=${model}`,
        offer.sdp,
        {
          headers: {
            Authorization: `Bearer ${EPHEMERAL_KEY}`,
            "Content-Type": "application/sdp",
          },
        }
      );

      const answer = {
        type: "answer",
        sdp: sdpResponse.data,
      };

      InCallManager.start({ media: "audio" });
      InCallManager.setForceSpeakerphoneOn(true);
      InCallManager.setSpeakerphoneOn(true);
      await pc.setRemoteDescription(answer);
    } catch (error) {
      console.error("Error initializing the call:", error);
    } finally {
      setLoading(false);
      player.pause();
    }
  }

  function toogle_mute() {
    if (mute) {
      InCallManager.setMicrophoneMute(false);
    } else {
      InCallManager.setMicrophoneMute(true);
    }
    setMute(!mute);
  }
  useEffect(() => {
    initCall();
    return () => {
      if (peer) {
        peer.close();
        InCallManager.stop();
      }
    };
  }, []);

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
        {loading ? (
          <View className="w-full h-full justify-center gap-2 items-center bg-black">
            <ActivityIndicator size="large" color={"white"}></ActivityIndicator>
            <P>Calling Aurora...</P>
          </View>
        ) : (
          <Image
            source={require("@/assets/images/assistaint.png")}
            className="w-full h-full   object-cover"
          ></Image>
        )}
      </View>
      <View className=" w-full flex-row justify-between p-5 gap-3">
        <Button
          onPress={() => console.log(player.isLoaded)}
          type="secondary"
          className="py-0 p-2 justify-center items-center w-24 h-24 "
        >
          <Setting2 color="white"></Setting2>
        </Button>
        <Button
          onPress={() => toogle_mute()}
          type="secondary"
          className="py-0 p-2 justify-center items-center w-24 h-24 "
        >
          {mute ? (
            <MicrophoneSlash color="white"></MicrophoneSlash>
          ) : (
            <Microphone color="white"></Microphone>
          )}
        </Button>

        <Button
          onPress={() => peer?.close()}
          type="secondary"
          className="py-0 flex-1 h-24 p-2 justify-center bg-red-500 items-center "
        >
          <Call color="white"></Call>
        </Button>
      </View>
    </View>
  );
}
