import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useMemo } from "react";
import { Routine } from "@/types/routine";
import { useRouter } from "expo-router";
import RoutineTaskBar from "./RoutineTaskBar";
import PALETTE from "@/constants/palette";
import { Styles } from "@/constants/styles";

type Props = {
  routine: Routine;
};

export default function RoutineItem({ routine }: Props) {
  const router = useRouter();

  const finishTime = useMemo(() => {
    return routine.tasks.reduce((accumulator, task) => {
      return accumulator + task.duration;
    }, 0);
  }, [routine]);

  const handlePress = () => {
    router.navigate(`routine/${routine.id}`);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <RoutineTaskBar routine={routine} />
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.title}>{routine.title}</Text>
          <Text style={Styles.text}>
            {routine.description || routine.tasks[0].title}
          </Text>
        </View>
        <View>
          <Text style={styles.time}>{finishTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 12,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontFamily: "mon-sb",
    fontSize: 16,
  },
  time: {
    fontFamily: "mon-b",
    fontSize: 18,
    color: PALETTE.primary,
  },
});
