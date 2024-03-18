export type Task = {
    title: string,
    description?: string,
    subtasks?: Task[],
    completed: boolean,
    duration: number,
}

export type Routine = {
    id: number,
    title: string,
    description?: string,
    tasks: Task[],
}