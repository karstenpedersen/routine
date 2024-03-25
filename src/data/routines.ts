import { Routine, RoutineTemplate } from "@/types/routine";

export const ROUTINE_IDEAS: RoutineTemplate[] = [
  {
    title: "Pomodoro",
    tasks: [
      {
        title: "Pomodoro",
        duration: 1500,
      },
      {
        title: "Short Break",
        duration: 300,
      },
      {
        title: "Pomodoro",
        duration: 1500,
      },
      {
        title: "Pomodoro",
        duration: 1500,
      },
      {
        title: "Short Break",
        duration: 300,
      },
    ],
  },
];

const routines: Routine[] = [
  {
    id: "1",
    title: "Morning Routine",
    description: "Description",
    tasks: [
      {
        id: "1",
        title: "Wash Face",
        duration: 300,
      },
      {
        id: "2",
        title: "Eat Breakfast",
        duration: 600,
      },
      {
        id: "3",
        title: "Brush Teeth",
        duration: 300,
      },
    ],
  },
  {
    id: "2",
    title: "Evening Routine",
    description: "Description",
    tasks: [
      {
        id: "1",
        title: "Eat Dinner",
        duration: 600,
      },
    ],
  },
];

export default routines;
