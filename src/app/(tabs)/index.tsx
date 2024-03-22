import { View, Text } from "react-native";
import React from "react";
import RoutineList from "@/components/routine/RoutineList";
import routines from "@/data/routines";
import { Styles } from "@/constants/styles";

export default function Routines() {
  return (
    <View style={Styles.screenContainer}>
      <Text style={Styles.heading}>Routines</Text>
      <RoutineList routines={routines} />
    </View>
  );
}
