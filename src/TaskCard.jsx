import { useContext } from "react"
import { TaskContext } from "./context/TaskContext"

function TaskCard({ task }) {

    const { deleteT } = useContext(TaskContext)

    return (
        <div className="bg-gray-800 text-white p-4 rounded-xl">
            <h3 className="text-xl font-bold capitalize">{task.title}</h3>
            <p className="text-sm">{task.description}</p>
            <button className="bg-red-500 px-2 rounded-md mt-2 hover:bg-red-400"
                onClick={() => deleteT(task.id)}>
                Eliminar Tarea
            </button>
        </div>
    )
}

export default TaskCard
