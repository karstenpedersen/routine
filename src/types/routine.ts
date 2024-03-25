export type RoutineTaskTemplate = {
  title: string;
  description?: string;
  subtasks?: RoutineTaskTemplate[];
  duration: number;
};
export type RoutineTask = Omit<RoutineTaskTemplate, "subtasks"> & {
  id: string;
  subtasks?: RoutineTask[];
};

export type RoutineTemplate = {
  title: string;
  description?: string;
  tasks?: RoutineTaskTemplate[];
  reminder?: Date;
};
export type Routine = Omit<RoutineTemplate, "tasks"> & {
  id: string;
  tasks?: RoutineTask[];
};

export const ROUTINE_CATEGORIES = [
  "Morning Routine",
  "Evening Routine",
  "Ready for Work",
  "Selfcare Routine",
  "Study Routine",
  "Pomodoro",
] as const;
export type RoutineCategory = (typeof ROUTINE_CATEGORIES)[number];
