import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
} & TouchableOpacityProps;

export default function IconButton({ children, ...props }: Props) {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {},
});
