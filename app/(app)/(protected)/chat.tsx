import Input from "@/components/ui/input";
import H1, { P } from "@/components/ui/text";
import { useToken } from "@/hooks/useToken";
import axios, { AxiosResponse } from "axios";
import { Image } from "expo-image";
import { ArrowLeft, Call, Send } from "iconsax-react-native";
import React from "react";
import { useRef, useState, useEffect } from "react";
import { KeyboardAvoidingView, Platform, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Audio } from "expo-av";
interface Message {
  role: "user" | "bot";
  content: string;
}

export default function Chat() {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const { token } = useToken();
  const [threadId, setThreadId] = useState<string | undefined>(undefined);

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
    if (!input.trim() || !threadId) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: input },
    ]);

    setInput("");

    try {
      console.log(token);
      setLoading(true);

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
  const [voice, setVoice] = useState("alloy");
  const [sound, setSound] = useState(null);

  const playStreamedAudio = async () => {
    try {
      // Fetch the audio stream from your API
      const response = await fetch(process.env.EXPO_API_URL + "/audio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: "Hello how are you today",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch audio stream");
      }

      // Get the response as a blob
      const blob = await response.blob();

      // Convert blob to a local URI
      const uri = URL.createObjectURL(blob);

      // Load and play the sound
      const { sound } = await Audio.Sound.createAsync(
        { uri },
        { shouldPlay: true }
      );
      setSound(sound);
    } catch (error) {
      console.error("Error playing audio:", error);
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
          <Call className="opacity-0" color="white" />
        </View>

        {/* Messages list with scroll */}
        <ScrollView
          ref={scrollViewRef}
          contentContainerClassName="gap-4"
          className="flex flex-col pt-5 px-3 gap-5 "
          contentContainerStyle={{ paddingBottom: 80 }}
        >
          {messages.map((message, index) => (
            <View
              key={index}
              className={`ml-3 gap-1  ${
                message.role === "user"
                  ? "self-end bg-primary test-right"
                  : "self-start bg-card "
              } border border-border p-3 w-fit h-fit rounded-2xl ${
                message.role === "user" ? "rounded-tr-none" : "rounded-tl-none"
              }`}
            >
              <P
                className={`${
                  message.role === "user"
                    ? "text-white  text-left"
                    : "text-left"
                }`}
              >
                {message.content}
              </P>
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
                  <View
                    className="bg-primary rounded-full flex justify-center items-center p-3"
                    onTouchEnd={send}
                  >
                    <Send color="white" variant="Bold" />
                  </View>
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
