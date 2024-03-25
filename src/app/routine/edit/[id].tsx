import Button from "@/components/input/Button";
import DateTimePickerButton from "@/components/input/DateTimePickerButton";
import InputContainer from "@/components/input/InputContainer";
import TextField from "@/components/input/TextField";
import PageShell from "@/components/page/PageShell";
import PageTitle from "@/components/page/PageTitle";
import TwoButtons from "@/components/ui/TwoButtons";
import { RootState } from "@/stores/store";
import { Routine, RoutineTask } from "@/types/routine";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const routines = useSelector((state: RootState) => state.content.routines);
  const dispatch = useDispatch();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState<RoutineTask[]>([]);
  const [reminder, setReminder] = useState<Date | undefined>();

  const handleSave = () => {
    const routine: Routine = {
      id: "TODO",
      title,
      description,
      tasks,
      reminder,
    };

    // dispatch();
    router.back();
  };

  const handleCancel = () => {
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
    <PageShell top={<PageTitle title="Edit Routine" showBackButton />}>
      <InputContainer>
        <TextField
          title="Title"
          placeholder="Morning Routine"
          value={title}
          setValue={setTitle}
          maxLength={48}
        />
        <TextField
          title="Description"
          placeholder="My morning routine..."
          value={description}
          setValue={setDescription}
          maxLength={256}
        />

        <View>
          <Text>Reminder</Text>
          <DateTimePickerButton
            placeholder="Add Reminder"
            value={reminder}
            setValue={setReminder}
          />
        </View>

        <View>
          <Text>Tasks</Text>
          <DateTimePickerButton
            placeholder="Add Reminder"
            value={reminder}
            setValue={setReminder}
          />
        </View>
        <TwoButtons>
          <Button text="Cancel" onPress={handleSave} />
          <Button text="Update" onPress={handleSave} />
        </TwoButtons>
      </InputContainer>
    </PageShell>
  );
}
