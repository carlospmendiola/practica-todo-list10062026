import { useEffect } from 'react'
import './App.css'
import { TodoAdd } from './components/TodoAdd'
import { TodoList } from './components/TodoList'
import { useTodoList } from './hooks/useTodoList'

function App() {
  const {
    todos,
    handleDeleteTodo,
    handleAddTodo,
    handleToggleTodo
  } = useTodoList()

  useEffect(() => {
    todos.length ? localStorage.setItem("todos", JSON.stringify(todos)) : localStorage.removeItem("todos")
  }, [todos])

  return (
    <>
      <header>
        <p>Práctica TodoList</p>
      </header>

      <article className='containerAll'>
        <h1>Tareas</h1>
        <TodoAdd handleAddTodo={handleAddTodo} />
        <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} />

      </article>

      <footer></footer>

    </>
  )
}

export default App
