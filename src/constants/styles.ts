import { StyleSheet } from "react-native";
import PALETTE from "./palette";

export const DefaultStyles = {
  inputBorderRadius: 8,
};

export const Styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 32,
  },
  inputField: {
    minHeight: 44,
    borderWidth: 1,
    borderColor: "#ABABAB",
    borderRadius: DefaultStyles.inputBorderRadius,
    padding: 10,
    backgroundColor: "#ffffff",
  },
  button: {
    height: 50,
    backgroundColor: PALETTE.primary.DEFAULT,
    borderRadius: DefaultStyles.inputBorderRadius,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "mon-sb",
    color: "#ffffff",
  },
  heading: {
    fontSize: 24,
    fontFamily: "mon-b",
  },
  text: {
    fontFamily: "mon",
    fontSize: 16,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
});
