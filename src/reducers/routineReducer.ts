import { INITIAL_ROUTINES } from "@/constants/routines";
import { Routine, RoutineTask } from "@/types/routine";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const routineSlice = createSlice({
  name: "routines",
  initialState: INITIAL_ROUTINES,
  reducers: {
    addRoutine: (state, action: PayloadAction<Routine>) => {
      state.push(action.payload);
    },
    removeRoutine: (state, action: PayloadAction<string>) => {
      return state.filter((routine) => routine.id !== action.payload);
    },
    addTask: (
      state,
      action: PayloadAction<{ id: string; task: RoutineTask }>
    ) => {
      state
        .find((routine) => routine.id === action.payload.id)
        ?.tasks.push(action.payload.task);
    },
    removeTask: (
      state,
      action: PayloadAction<{ id: string; task: RoutineTask }>
    ) => {
      state
        .find((routine) => routine.id === action.payload.id)
        ?.tasks.filter((task) => task.id !== action.payload.task.id);
    },
    toggleTask: (
      state,
      action: PayloadAction<{ routineId: string; taskId: string }>
    ) => {
      const task = state
        .find((routine) => routine.id === action.payload.routineId)
        ?.tasks.find((task) => task.id === action.payload.taskId);

      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addRoutine, removeRoutine, addTask, removeTask, toggleTask } =
  routineSlice.actions;

export default routineSlice.reducer;
