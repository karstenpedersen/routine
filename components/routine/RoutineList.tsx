import { StyleSheet, View } from "react-native";
import React from "react";
import { Routine } from "@/types/routine";
import RoutineItem from "./RoutineItem";

type Props = {
  routines: Routine[];
};

export default function RoutineList({ routines }: Props) {
  return (
    <View style={styles.container}>
      {routines.map((routine) => (
        <RoutineItem key={routine.id} routine={routine} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
});
