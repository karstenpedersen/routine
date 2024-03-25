import { ROUTINE_TASK_IDEAS } from "@/data/routineTasks";
import { RoutineCategory, RoutineTaskTemplate } from "@/types/routine";
import React from "react";
import {
  SectionList,
  SectionListData,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import RoutineTaskTemplateItem from "./RoutineTaskTemplateItem";
import { BottomSheetModal, BottomSheetSectionList } from "@gorhom/bottom-sheet";

export default function RoutineTaskTemplatePicker() {
  const renderItem = ({ item }: { item: RoutineTaskTemplate }) => {
    const handleClick = () => {};

    return (
      <TouchableOpacity onPress={handleClick}>
        <RoutineTaskTemplateItem task={item} />
      </TouchableOpacity>
    );
  };

  const renderSectionHeader = ({
    section: { title },
  }: {
    section: { title: string };
  }) => {
    return <Text style={{ fontFamily: "mon-sb", fontSize: 16 }}>{title}</Text>;
  };

  return (
    <BottomSheetSectionList
      sections={ROUTINE_TASK_IDEAS}
      keyExtractor={(item, index) => `${item.title}-${index}`}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      stickySectionHeadersEnabled
      contentContainerStyle={{ gap: 12 }}
    />
  );
}
