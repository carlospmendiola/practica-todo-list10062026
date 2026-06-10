



export const TodoAdd = ({handleAddTodo}) => {

  const handlerSubmit = (ev) =>{
    ev.preventDefault()
    const newTodo = {
      id: Date.now(),
      todo: ev.target.tarea.value,
      description: ev.target.descripcion.value,
      done: false,
      date: new Date()
    }
    handleAddTodo(newTodo)
  }
  return (
    <section>
      <h2>Añadir tarea</h2>
      <form onSubmit={handlerSubmit}  className="flexContainer positionRow center">
        <input type="text" id='tarea' name='tarea' placeholder='Tarea' />
        <textarea name="descripcion" id="descripcion" placeholder="Descripcion"></textarea>
        <button type='submit'>Añadir tarea</button>
      </form>
    </section>
  )
}
