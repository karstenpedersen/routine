import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Styles } from "@/constants/styles";

export default function CreateRoutine() {
  return (
    <View style={Styles.screenContainer}>
      <View style={Styles.form}>
        <Text style={Styles.heading}>Create Routine</Text>
        <TextInput placeholder="Title" style={Styles.inputField} />
        <TextInput placeholder="Description" style={Styles.inputField} />
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>Create Routine</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
