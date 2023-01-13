import TaskList from './TaskList'
import TaskForm from './TaskForm'


function App() {

  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-5'>
        <TaskForm />
        <TaskList />
      </div>
    </main>

  )
}

export default App