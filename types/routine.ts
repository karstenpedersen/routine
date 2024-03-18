export type RoutineTask = {
  title: string;
  description?: string;
  subtasks?: RoutineTask[];
  completed: boolean;
  duration: number;
};

export type Routine = {
  id: number;
  title: string;
  description?: string;
  tasks: RoutineTask[];
};
