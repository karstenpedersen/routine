import { Routine, RoutineTask, RoutineTaskTemplate } from "@/types/routine";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import RoutineItem from "./RoutineItem";
import RoutineTaskTemplateItem from "./RoutineTaskTemplateItem";
import RoutineTaskTemplatePicker from "./RoutineTaskTemplatePicker";
import BottomModal from "../BottomModal";
import { BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { ROUTINE_TASK_IDEAS } from "@/data/routineTasks";

type Props = {
  tasks: RoutineTaskTemplate[];
  setTasks: Dispatch<SetStateAction<RoutineTaskTemplate[]>>;
};

export default function RoutineTaskTemplateList({ tasks, setTasks }: Props) {
  const sheetRef = useRef<BottomSheetModal>(null);

  const renderItem = ({
    item,
    index,
  }: {
    item: RoutineTaskTemplate;
    index: number;
  }) => {
    const handleClick = () => {
      setTasks((tasks) => tasks.filter((_, taskIndex) => taskIndex !== index));
    };

    return (
      <TouchableOpacity onPress={handleClick}>
        <RoutineTaskTemplateItem task={item} />
      </TouchableOpacity>
    );
  };

  const handleCreate = () => {
    sheetRef.current?.present();
  };

  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        contentContainerStyle={{ gap: 18 }}
        ListFooterComponent={
          <TouchableOpacity onPress={handleCreate}>
            <Text>Add Task</Text>
          </TouchableOpacity>
        }
      />
      <BottomModal title="Add Task" ref={sheetRef}>
        {/* <RoutineTaskTemplatePicker /> */}
        <Text>Hello</Text>
      </BottomModal>
    </View>
  );
}
