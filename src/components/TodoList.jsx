import { Todo } from "./Todo"

export const TodoList = ({todos, handleDeleteTodo, handleToggleTodo}) => {

  return (
    <section>
      <h2>Listado de tareas</h2>
      <ul>
      {
        todos.map(todo => <Todo key={todo.id} todo ={todo} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} />)
      }
      </ul>
    </section>
  )
}
