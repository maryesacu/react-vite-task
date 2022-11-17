import { createContext, useEffect, useState } from "react";
import { ITaskCard, ITaskContextValue } from "../Types/taskInterfaces";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext<ITaskContextValue>({
  tasks: [
    {
      id: 0,
      title: "",
      description: "",
    }
  ],
  deleteTask() {},
  createTask() {}
});

export function TaskContextProvider(props: any) {
  const [tasks, setTasks] = useState<ITaskCard[]>([
    {
      id: 0,
      title: "",
      description: "",
    },
  ]);

  function deleteTask(taskId: number) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function createTask(task: ITaskCard) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
