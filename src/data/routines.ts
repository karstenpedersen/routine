import { Routine } from "@/types/routine";

const routines: Routine[] = [
  {
    id: "1",
    title: "Morning Routine",
    tasks: [
      {
        id: "1",
        title: "Wash Face",
        completed: false,
        duration: 300,
      },
      {
        id: "2",
        title: "Eat Breakfast",
        completed: false,
        duration: 600,
      },
      {
        id: "3",
        title: "Brush Teeth",
        completed: false,
        duration: 300,
      },
    ],
  },
  {
    id: "2",
    title: "Evening Routine",
    tasks: [
      {
        id: "1",
        title: "Eat Dinner",
        completed: false,
        duration: 600,
      },
    ],
  },
];

export default routines;
