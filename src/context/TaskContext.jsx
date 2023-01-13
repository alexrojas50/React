import { createContext } from "react"
import { useState } from "react"
import { task } from "../tasksss"
import newId from "../utils/newId"

export const TaskContext = createContext()

export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState(task)

  function createTask(title, description) {
    console.log("Tasssskkkk")
    setTasks([...tasks, {
      title: title,
      id: newId(),
      description: description
    }])
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <TaskContext.Provider value={{
      tasks: tasks,
      deleteT: deleteTask,
      createT: createTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}

