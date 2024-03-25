import { StyleSheet, View } from "react-native";
import React, { ReactNode } from "react";

type Props = {
  top?: ReactNode;
  children: ReactNode;
  bottom?: ReactNode;
};

export default function PageShell({ top, children, bottom }: Props) {
  return (
    <View style={styles.page}>
      {top && <View style={styles.top}>{top}</View>}
      <View style={styles.content}>{children}</View>
      {bottom && <View style={styles.bottom}>{bottom}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
  top: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  content: {
    padding: 20,
  },
  bottom: {},
});
