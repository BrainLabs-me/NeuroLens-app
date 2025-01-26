import Input from "@/components/ui/input";
import H1, { P } from "@/components/ui/text";
import { useToken } from "@/hooks/useToken";
import axios, { AxiosResponse } from "axios";
import { Image } from "expo-image";
import {
  ArrowLeft,
  AudioSquare,
  Call,
  Send,
  VolumeHigh,
} from "iconsax-react-native";
import React from "react";
import { useRef, useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Audio } from "expo-av";
interface Message {
  role: "user" | "bot";
  content: string;
}
import { Buffer } from "buffer";
import { cn } from "@/lib/utils";
import { useAudioPlayer } from "expo-audio";
import { Link } from "expo-router";
export default function Chat() {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const { token } = useToken();
  const player = useAudioPlayer(require("@/assets/sounds/pop-39222.mp3"));
  const [threadId, setThreadId] = useState<string | undefined>(undefined);
  useEffect(() => {
    const requestAudioPermissions = async () => {
      const response = await Audio.requestPermissionsAsync();
      if (!response.granted) {
        Alert.alert(
          "Permissions Required",
          "Please grant audio permissions to use this feature."
        );
      }
    };
    requestAudioPermissions();
  }, []);
  // Function to start the chat and get a thread ID
  const start = async (): Promise<void> => {
    try {
      console.log(token);
      const thread: AxiosResponse<{ thread_id: string }> = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/start-chat`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(thread.data);
      setThreadId(thread.data.thread_id);
    } catch (err: any) {
      if (err.response && err.response.data) {
        console.log(err.response.data);
      } else {
        console.log(err);
      }
    } finally {
    }
  };

  const send = async (): Promise<void> => {
    console.log(threadId);

    if (!input.trim() || !threadId) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: input },
    ]);

    try {
      console.log(token);
      setLoading(true);
      setInput("");

      const res: AxiosResponse<{ message: string }> = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/send-message`,
        {
          thread_id: threadId,
          prompt: input,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "bot", content: res.data.message },
      ]);
      player.play();
    } catch (err: any) {
      if (err.response && err.response.data) {
        console.log(err.response.data);
      } else {
        console.log(err);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      start();
    }
  }, [token]);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const [inputText, setInputText] = useState(
    "The quick brown fox jumped over the lazy dog."
  );
  const [sound, setSound] = useState(null);
  const [audio_loading, setAudioLoading] = useState();
  const playStreamedAudio = async (message: string, index: number) => {
    try {
      setAudioLoading(index);
      console.log("a");
      const response = await axios.post(
        `https://app.neurolens.me/api/audio`,
        { input: message },
        {
          headers: {
            "Content-Type": "application/json",
          },
          responseType: "arraybuffer",
        }
      );

      // Convert arraybuffer to base64
      const base64Audio = Buffer.from(response.data, "binary").toString(
        "base64"
      );
      console.log(base64Audio);

      // Create a data URI for the audio
      const audioURI = `data:audio/mp3;base64,${base64Audio}`;

      // Load and play the sound
      const { sound } = await Audio.Sound.createAsync(
        { uri: audioURI },
        { shouldPlay: true }
      );
      setSound(sound);
    } catch (error) {
      console.error("Error playing audio:", error);
      Alert.alert("Error", "Failed to play audio. Please try again.");
    } finally {
      setAudioLoading(false);
    }
  };

  // Cleanup the sound when the component unmounts
  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <>
      <View className="bg-[#00000F] absolute w-full h-full" />

      <Image
        transition={200}
        source={require("@/assets/images/bg-3.png")}
        style={{
          transform: [{ scale: 1.0 }],
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
        }}
      />

      <SafeAreaView className="flex-1">
        {/* Header */}
        <View className="flex px-3 pb-3 flex-row items-center justify-between gap-5 border-b border-border">
          <ArrowLeft color="white" />
          <P className="text-3xl text-white">Aurora</P>
          <Link href="/(app)/(protected)/assistant">
            <Call className="opacity-0" color="white" />
          </Link>
        </View>

        {/* Messages list with scroll */}
        <ScrollView
          ref={scrollViewRef}
          contentContainerClassName="gap-4"
          className="flex flex-col pt-5 px-3 gap-5 "
          contentContainerStyle={{ paddingBottom: 80 }}
        >
          {messages.map((message, index) => (
            <View key={index} className="ml-3 w-fit gap-1">
              <View
                key={index}
                className={` gap-1  ${
                  message.role === "user"
                    ? "self-end bg-primary test-right"
                    : "self-start bg-card "
                } border border-border p-3 w-fit h-fit rounded-2xl ${
                  message.role === "user"
                    ? "rounded-tr-none"
                    : "rounded-tl-none"
                }`}
              >
                <P
                  className={`${
                    message.role === "user"
                      ? "text-white  text-lg text-left"
                      : "text-left text-lg"
                  }`}
                >
                  {message.content}
                </P>
              </View>
              {message.role === "bot" && (
                <TouchableOpacity
                  className="text-end flex justify-start items-start"
                  onPress={() => playStreamedAudio(message.content, index)}
                >
                  {audio_loading === index ? (
                    <ActivityIndicator
                      color={"white"}
                      size={"small"}
                    ></ActivityIndicator>
                  ) : (
                    <VolumeHigh size="22" color="white" />
                  )}
                </TouchableOpacity>
              )}
            </View>
          ))}
          {loading && (
            <View className="self-start  border-border p-3 w-fit h-fit rounded-2xl rounded-tl-none">
              <P className="text-xl">Aurora thinking...</P>
            </View>
          )}
        </ScrollView>

        {/* Message input and send button */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={{ flex: 1 }}
        >
          <View className="h-full px-3 justify-center items-center">
            <View className="absolute bottom-3 w-full">
              <Input
                className="p-2 pl-5 z-50 w-full"
                value={input}
                onChange={setInput}
                onSubmitEditing={send}
                blurOnSubmit={false}
                endContent={
                  <TouchableOpacity
                    disabled={!input ? true : false}
                    className={cn(
                      "bg-primary rounded-full flex justify-center items-center p-3",
                      !input && "bg-[#9075FF]"
                    )}
                    onPress={() => send()}
                  >
                    <Send
                      color={!input ? "rgba(255,255,255,0.7)" : "white"}
                      variant="Bold"
                    />
                  </TouchableOpacity>
                }
                placeholder="Message"
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}
