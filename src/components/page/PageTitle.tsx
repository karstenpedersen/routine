import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "../input/BackButton";

type Props = {
  title: string;
  actions?: ReactNode;
  showBackButton?: boolean;
};

export default function PageTitle({
  title,
  actions,
  showBackButton = false,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        {showBackButton && <BackButton />}
        <Text style={styles.title}>{title}</Text>
      </View>
      {actions && <View style={styles.itemContainer}>{actions}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "mon-b",
    fontSize: 24,
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
