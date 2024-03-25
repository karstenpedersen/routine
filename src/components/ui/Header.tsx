import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";

export type HeaderProps = {
  title: string;
  leftActions: ReactNode;
  rightActions: ReactNode;
};

export default function Header() {
  return (
    <View>
      <Text>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
