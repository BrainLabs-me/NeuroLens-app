import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import Reminder from "@/components/ui/reminder";

export default function HomeScreen() {
  // Array of reminders
  const reminders = [
    { title: "Reminder", description: "Take a walk", time: "09:00-10:00" },
    { title: "Reminder 2", description: "Drink water", time: "10:00-11:00" },
    {
      title: "Reminder 3",
      description: "Meeting with team",
      time: "11:00-12:00",
    },
  ];

  return (
    <>
      <Image
        source={require("@/assets/images/bg-2.png")}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
        }}
      />
      <SafeAreaView>
        <View className="flex flex-col justify-center h-full px-[5%]">
          <Text className="text-[32px] text-white mb-[6rem]">Reminders</Text>
          <View className="flex flex-col gap-4">
            <Reminder add />
            {reminders.map((reminder, index) => (
              <Reminder
                key={index}
                add={false}
                title={reminder.title}
                description={reminder.description}
                time={reminder.time}
              />
            ))}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
