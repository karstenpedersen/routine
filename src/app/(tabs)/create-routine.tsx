import BottomModal from "@/components/BottomModal";
import Button from "@/components/input/Button";
import DateTimePickerButton from "@/components/input/DateTimePickerButton";
import InputContainer from "@/components/input/InputContainer";
import TextField from "@/components/input/TextField";
import PageShell from "@/components/page/PageShell";
import PageTitle from "@/components/page/PageTitle";
import RoutineTaskTemplateList from "@/components/routine/RoutineTaskTemplateList";
import { RootState } from "@/stores/store";
import { RoutineTaskTemplate } from "@/types/routine";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function CreateRoutine() {
  const routines = useSelector((state: RootState) => state.content.routines);
  const dispatch = useDispatch();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState<RoutineTaskTemplate[]>([
    {
      title: "Hello",
      duration: 300,
    },
    {
      title: "World",
      duration: 300,
    },
  ]);
  const [reminder, setReminder] = useState<Date | undefined>();

  const handleCreate = () => {
    // CREATE ROUTINE
    // dispatch();
    router.back();
  };

  return (
    <PageShell top={<PageTitle title="Create Routine" showBackButton />}>
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
          <Text>
            {tasks.length} task{tasks.length === 1 ? "" : "s"}
          </Text>
          <RoutineTaskTemplateList tasks={tasks} setTasks={setTasks} />
        </View>
        <Button text="Create Routine" onPress={handleCreate} />
      </InputContainer>
    </PageShell>
  );
}
