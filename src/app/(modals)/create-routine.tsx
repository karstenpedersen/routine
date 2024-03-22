import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Styles } from "@/constants/styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/stores/store";

export default function CreateRoutine() {
  const routines = useSelector((state: RootState) => state.content.routines);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    // dispatch();
  };

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
