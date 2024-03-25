import { Routine } from "@/types/routine";
import React from "react";
import { FlatList, Text } from "react-native";
import RoutineItem from "./RoutineItem";

type Props = {
  routines: Routine[];
};

export default function RoutineList({ routines }: Props) {
  const renderItem = ({ item }: { item: Routine }) => {
    return <RoutineItem routine={item} />;
  };

  return (
    <FlatList
      data={routines}
      renderItem={renderItem}
      ListEmptyComponent={<Text>No routines...</Text>}
      contentContainerStyle={{ gap: 18 }}
    />
  );
}
