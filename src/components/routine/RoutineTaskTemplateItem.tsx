import { View, Text, StyleSheet } from "react-native";
import { RoutineTask, RoutineTaskTemplate } from "@/types/routine";

type Props = {
  task: RoutineTaskTemplate;
};

export default function RoutineTaskTemplateItem({ task }: Props) {
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "#1b1b1b",
  },
});
