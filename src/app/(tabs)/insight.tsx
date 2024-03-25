import { View, Text } from "react-native";
import React from "react";
import PageShell from "@/components/page/PageShell";
import PageTitle from "@/components/page/PageTitle";

export default function Insight() {
  return (
    <PageShell top={<PageTitle title="Profile" />}>
      <Text>Hello, World!</Text>
    </PageShell>
  );
}
