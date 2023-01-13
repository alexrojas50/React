import { useState } from "react"
import { useContext } from "react"
import { TaskContext } from "./context/TaskContext"

function TaskForm() {

    const { createT } = useContext(TaskContext)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title == "" || description == "") return
        createT(title, description)
        setTitle("")
        setDescription("")
    }

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-5 mb-4 rounded-xl">
                <h1 className="mb-3 text-2xl text-white font-bold">Crea tu tarea</h1>
                <input type="text" placeholder="Titulo de tu tarea"
                    onChange={(e) => { setTitle(e.target.value) }}
                    value={title}
                    autoFocus
                    className="bg-slate-300 p-3 w-full mb-5 rounded-xl" />
                <textarea placeholder="Describe tu tarea"
                    onChange={(e) => { setDescription(e.target.value) }}
                    value={description}
                    className="bg-slate-300 p-3 w-full mb-2 rounded-xl" />
                <button
                    className="bg-green-700 rounded-md px-4 py-1 hover:bg-green-400 text-white">
                    Guardar
                </button>
            </form>
        </div>
    )
}

export default TaskForm