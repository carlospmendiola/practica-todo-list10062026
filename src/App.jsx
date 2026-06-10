import './App.css'
import { TodoAdd } from './components/TodoAdd'
import { TodoList } from './components/TodoList'

function App() {


  return (
    <>
      <header>
        <p>Práctica TodoList</p>
      </header>
      <h1>Lista de Tareas</h1>
      <TodoAdd/>
      <TodoList/>
     
    </>
  )
}

export default App
