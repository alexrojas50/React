import TaskCard from "./TaskCard"
import { useContext } from "react"
import { TaskContext } from "./context/TaskContext"



function TaskList() {

    const { tasks } = useContext(TaskContext)

    if (tasks.length == 0) return <div className="text-xl text-white">No hay tareas disponibles</div>

    return (
        <div className="grid grid-cols-4 gap-2">
            {
                tasks.map((task) => (
                    <TaskCard task={task} key={task.id} />
                ))
            }
        </div>
    )
}

export default TaskList