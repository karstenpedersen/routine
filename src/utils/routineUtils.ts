import { Routine } from "@/types/routine";

export function findRoutine(id: string, routines: Routine[]) {
  return routines.find((routine) => routine.id === id);
}

export function findTask(id: string, routine: Routine) {
  if (!routine.tasks) {
    return undefined;
  }

  return routine.tasks.find((task) => task.id === id);
}
