import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function SheetHandle({ children }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.indicator} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  indicator: {
    alignSelf: "center",
    width: "8%",
    height: 5,
    borderRadius: 4,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    marginBottom: 20,
  },
});
