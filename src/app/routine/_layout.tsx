import { Stack } from "expo-router";

export default function RoutineLayout() {
  return (
    <Stack>
      <Stack.Screen name="[id]" options={{ headerShown: false }} />{" "}
      <Stack.Screen name="active/[id]" options={{ headerShown: false }} />
      <Stack.Screen
        name="edit/[id]"
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack>
  );
}
