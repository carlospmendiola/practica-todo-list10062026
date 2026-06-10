import { useReducer } from "react";
import { todoReducer } from "../reducer/todoReducer";


export const useTodoList = (defaultValue) => {

  const [todos, dispatch] = useReducer(todoReducer, defaultValue);

  const handleAddTodo = (todo) => {
    const action = {
      type: 'add-todo',
      payload: todo
    }
    dispatch(action)
  }

  const handleDeleteTodo = (id) => {
    const action = {
      type: 'delete-todo',
      payload: id
    }
    dispatch(action)
  }

  const handleToggleTodo = (id) => {
    const action = {
      type: 'toggle-todo',
      payload: id
    }
    dispatch(action)
  }

  return {
    todos,
    handleDeleteTodo,
    handleAddTodo,
    handleToggleTodo
  }
}
