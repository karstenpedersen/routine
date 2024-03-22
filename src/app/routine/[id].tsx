import { View, Text, TouchableOpacity } from "react-native";
import React, { useMemo } from "react";
import { useLocalSearchParams } from "expo-router";
import { Styles } from "@/constants/styles";
import { Routine } from "@/types/routine";
import Button from "@/components/ui/Button";

export default function Page() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const routine: Routine = useMemo(() => {
    return {
      id: 1,
      tasks: [],
      title: "Morning Routine",
      description: "Very good morning routine.",
    };
  }, [id]);

  return (
    <View style={Styles.screenContainer}>
      <View>
        <Text style={Styles.heading}>{routine.title}</Text>
        <Text style={Styles.text}>{routine.description}</Text>
      </View>
      <View>
        <Button text="Start Routine" />
      </View>
    </View>
  );
}
