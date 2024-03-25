import { RoutineCategory, RoutineTaskTemplate } from "@/types/routine";

export const ROUTINE_TASK_IDEAS: {
  title: RoutineCategory;
  data: RoutineTaskTemplate[];
}[] = [
  {
    title: "Morning Routine",
    data: [
      {
        title: "Make breakfast",
        duration: 900,
      },
      {
        title: "Brush teeth",
        duration: 180,
      },
      {
        title: "Make bed",
        duration: 120,
      },
      {
        title: "Take a shower",
        duration: 600,
      },
      {
        title: "Wash my face",
        duration: 60,
      },
      {
        title: "Make coffee",
        duration: 480,
      },
    ],
  },
  { title: "Evening Routine", data: [] },
  {
    title: "Ready for Work",
    data: [
      {
        title: "Answer emails",
        duration: 900,
      },
    ],
  },
  { title: "Selfcare Routine", data: [] },
  { title: "Study Routine", data: [] },
  {
    title: "Pomodoro",
    data: [
      {
        title: "Pomodoro",
        duration: 1500,
      },
      {
        title: "Short break",
        duration: 300,
      },
      {
        title: "Long break",
        duration: 900,
      },
    ],
  },
];
