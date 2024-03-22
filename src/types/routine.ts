export type RoutineTask = {
  id: string;
  title: string;
  description?: string;
  subtasks?: RoutineTask[];
  completed: boolean;
  duration: number;
};

export type Routine = {
  id: string;
  title: string;
  description?: string;
  tasks: RoutineTask[];
};
