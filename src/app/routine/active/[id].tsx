import Button from "@/components/input/Button";
import PageShell from "@/components/page/PageShell";
import PageTitle from "@/components/page/PageTitle";
import { RootState } from "@/stores/store";
import { Routine } from "@/types/routine";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo } from "react";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const routines = useSelector((state: RootState) => state.content.routines);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleStop = () => {
    router.back();
  };

  const routine: Routine = useMemo(() => {
    return {
      id: "1",
      tasks: [],
      title: "Morning Routine",
      description: "Very good morning routine.",
    };
  }, [id]);

  return (
    <PageShell top={<PageTitle title={routine.title} />}>
      <Text>Timer</Text>
      <Button text="Stop Routine" onPress={handleStop} />
    </PageShell>
  );
}
