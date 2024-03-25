import React from "react";
import RoutineList from "@/components/routine/RoutineList";
import routines from "@/data/routines";
import PageTitle from "@/components/page/PageTitle";
import PageShell from "@/components/page/PageShell";

export default function Routines() {
  return (
    <PageShell top={<PageTitle title="Routines" />}>
      <RoutineList routines={routines} />
    </PageShell>
  );
}
