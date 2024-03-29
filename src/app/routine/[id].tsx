import Button from "@/components/input/Button";
import IconButton from "@/components/input/IconButton";
import PageShell from "@/components/page/PageShell";
import PageTitle from "@/components/page/PageTitle";
import { Routine } from "@/types/routine";
import { useLocalSearchParams, useRouter } from "expo-router";
import { PenIcon } from "lucide-react-native";
import React, { useMemo } from "react";
import { Text } from "react-native";

export default function Page() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const routine: Routine = useMemo(() => {
    return {
      id: "1",
      tasks: [],
      title: "Morning Routine",
      description: "Very good morning routine.",
    };
  }, [id]);

  const handleStart = () => {
    router.navigate(`/routine/active/${id}`);
  };

  const handleEdit = () => {
    router.navigate(`/routine/edit/${id}`);
  };

  return (
    <PageShell
      top={
        <PageTitle
          title={routine.title}
          actions={
            <IconButton onPress={handleEdit}>
              <PenIcon color="#1b1b1b" size={28} />
            </IconButton>
          }
          showBackButton
        />
      }
    >
      <Text>{routine.description}</Text>
      <Button text="Start Routine" onPress={handleStart} />
    </PageShell>
  );
}
