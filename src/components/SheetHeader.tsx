import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconButton from "./input/IconButton";
import { XIcon } from "lucide-react-native";
import SheetHandle from "./SheetHandle";

type Props = {
  title: string;
  showCloseButton?: boolean;
  handleClose: () => void;
};

export default function SheetHeader({
  title,
  showCloseButton = true,
  handleClose,
}: Props) {
  return (
    <SheetHandle>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {showCloseButton && (
          <IconButton onPress={handleClose}>
            <XIcon color="#1b1b1b" size={32} />
          </IconButton>
        )}
      </View>
    </SheetHandle>
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
});
