import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Divider() {
  return <View style={styles.divider}></View>;
}

const styles = StyleSheet.create({
  divider: {
    height: 3,
    backgroundColor: "#1b1b1b",
    borderRadius: 50,
  },
});
