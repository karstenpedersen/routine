import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { XIcon } from "lucide-react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import IconButton from "./IconButton";

type Props = {
  placeholder: string;
  value: Date | undefined;
  setValue: Dispatch<SetStateAction<Date | undefined>>;
};

export default function DateTimePickerButton({
  placeholder,
  value,
  setValue,
}: Props) {
  const [date, setDate] = useState(value ?? new Date());
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  const handleClear = () => {
    setValue(undefined);
    setDate(new Date());
  };

  const handleChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShow(false);
    setValue(selectedDate);
    if (selectedDate) {
      setDate(selectedDate);
    } else {
      setDate(new Date());
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={handleClick}
    >
      <Text style={styles.buttonText}>
        {value?.toLocaleTimeString() ?? placeholder}
      </Text>
      {value && (
        <IconButton style={styles.clearButton} onPress={handleClear}>
          <XIcon color="#1b1b1b" />
        </IconButton>
      )}

      {show && (
        <DateTimePicker mode="time" value={date} onChange={handleChange} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    backgroundColor: "#ffffff",
    borderWidth: 3,
    borderColor: "#1b1b1b",
    borderRadius: 8,
  },
  button: {},
  buttonText: {
    padding: 12,
  },
  clearButton: {
    paddingHorizontal: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
  },
});
