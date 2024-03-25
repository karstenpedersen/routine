import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function TwoButtons({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
});
