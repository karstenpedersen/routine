import { StyleSheet } from "react-native";
import React from "react";
import IconButton from "./IconButton";
import { ChevronLeftIcon } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <IconButton onPress={handleClick}>
      <ChevronLeftIcon color="#1b1b1b" size={36} />
    </IconButton>
  );
}

const styles = StyleSheet.create({});
