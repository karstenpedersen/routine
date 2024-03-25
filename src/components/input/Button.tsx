import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import { Styles } from "@/constants/styles";

type Props = {
  text: string;
} & TouchableOpacityProps;

export default function Button({ text, ...props }: Props) {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1b1b1b",
    paddingHorizontal: 16,
    paddingVertical: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    fontFamily: "mon-sb",
    fontSize: 16,
    color: "#ffffff",
  },
});
