export interface ITaskCard {
  id: number,
  title: string,
  description: string,
}

export interface ITaskCardBefore {
  title: string,
  description: string,
}

export interface ITaskContextValue {
  tasks: ITaskCard[],
  deleteTask(id: number): void,
  createTask(task: ITaskCardBefore): void
}
