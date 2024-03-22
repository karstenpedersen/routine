import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Routine } from "@/types/routine";

type Props = {
  routine: Routine;
};

export default function RoutineTaskBar({ routine }: Props) {
  return (
    <View style={styles.container}>
      {routine.tasks.map((_, index) => (
        <View key={index} style={styles.indicator}></View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    height: 6,
  },
  indicator: {
    flex: 1,
    backgroundColor: "#eeeeee",
    borderRadius: 5,
  },
});
