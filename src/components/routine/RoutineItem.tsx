import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useMemo } from "react";
import { Routine } from "@/types/routine";
import { useRouter } from "expo-router";
import RoutineTaskBar from "./RoutineTaskBar";
import PALETTE from "@/constants/palette";
import { Styles } from "@/constants/styles";
import IconButton from "../input/IconButton";
import { MoreHorizontal } from "lucide-react-native";

type Props = {
  routine: Routine;
};

export default function RoutineItem({ routine }: Props) {
  const router = useRouter();

  const finishTime = useMemo(() => {
    if (!routine.tasks) {
      return 0;
    }

    return routine.tasks.reduce((accumulator, task) => {
      return accumulator + task.duration;
    }, 0);
  }, [routine]);

  const handlePress = () => {
    router.navigate(`routine/${routine.id}`);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{routine.title}</Text>
        <IconButton>
          <MoreHorizontal color="#1b1b1b" size={28} />
        </IconButton>
      </View>
      <Text style={styles.description}>{routine.description}</Text>
      <Text style={styles.time}>6:00 AM - 6:30 AM</Text>
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
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderColor: "#1b1b1b",
    borderWidth: 3,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "mon-sb",
    fontSize: 20,
    color: "#1b1b1b",
  },
  description: {
    fontFamily: "mon",
    fontSize: 14,
    color: "#585858",
  },
  time: {
    fontFamily: "mon-sb",
    fontSize: 16,
    color: "#1b1b1b",
    marginTop: 6,
  },
});
