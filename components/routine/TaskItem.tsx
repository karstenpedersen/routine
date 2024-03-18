import { View, Text, StyleSheet } from "react-native";
import { RoutineTask } from "@/types/routine";

type Props = {
  task: RoutineTask;
};

export default function TaskItem({ task }: Props) {
  return (
    <View style={styles.container}>
      <Text>{task.title}</Text>
      <Text>{task.duration}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 8,
    borderRadius: 8,
  },
});
