export const Todo = ({ todo, handleDeleteTodo, handleToggleTodo }) => {
  const handleToggleClick = () => {
    handleToggleTodo(todo.id)
  }
  const handleDeleteClick = () => {
    handleDeleteTodo(todo.id)
  }
  return (
    <li className="flexContainer alingLateral">
      <p className="tareaDetalle"><span>{todo.todo}</span> - {todo.description}</p>
      <div><button onClick={handleToggleClick}>
        {todo.done ?
          'Finalizada' : 'Pendiente'
        }</button>
        <button onClick={handleDeleteClick}>Eliminar</button>
      </div>
    </li>
  )
}
