import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { XIcon } from "lucide-react-native";
import React, { ReactNode, Ref, forwardRef, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "./input/IconButton";
import SheetHeader from "./SheetHeader";

type Props = {
  title: string;
  showCloseButton?: boolean;
  snapPoints?: (string | number)[];
  children: ReactNode;
} & BottomSheetModalProps;

const BottomModal = forwardRef(
  (
    {
      title,
      children,
      snapPoints = ["25%", "50%", "75%"],
      showCloseButton = true,
      ...props
    }: Props,
    ref: Ref<BottomSheetModal>
  ) => {
    const handleClose = useCallback(() => {
      if (ref && "current" in ref) {
        ref.current?.close();
      }
    }, [ref]);

    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        />
      ),
      []
    );

    const renderHeader = useCallback(
      () => (
        <SheetHeader title="Hello, World!" handleClose={() => handleClose()} />
      ),
      []
    );

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        {...props}
        handleComponent={renderHeader}
      >
        <BottomSheetView style={styles.container}>{children}</BottomSheetView>
      </BottomSheetModal>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 6,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontFamily: "mon-b",
    fontSize: 24,
  },
});

export default BottomModal;
