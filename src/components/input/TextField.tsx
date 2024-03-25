import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React, { Dispatch, SetStateAction, useMemo } from "react";

type Props = {
  title: string;
  setValue: Dispatch<SetStateAction<string>>;
} & TextInputProps;

export default function TextField({
  title,
  value,
  setValue,
  maxLength,
  ...props
}: Props) {
  const length = useMemo(() => value?.length ?? 0, [value]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={(value) => setValue(value)}
          maxLength={maxLength}
          {...props}
        />
        {maxLength && (
          <Text style={styles.lengthText}>
            {length}/{maxLength}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 3,
    borderColor: "#1b1b1b",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  textInput: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 12,
    paddingTop: 6,
    paddingBottom: 8,
    flex: 1,
  },
  title: {
    fontFamily: "mon-sb",
    fontSize: 14,
  },
  lengthText: {
    fontFamily: "mon-sb",
    fontSize: 12,
    color: "#999999",
  },
});
