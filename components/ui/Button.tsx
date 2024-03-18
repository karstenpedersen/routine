import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { Styles } from "@/constants/styles";

type Props = {
  text: string;
} & TouchableOpacityProps;

export default function Button({ text, ...props }: Props) {
  return (
    <TouchableOpacity style={Styles.button} {...props}>
      <Text style={Styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
