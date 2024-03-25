import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function InputContainer({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
});
