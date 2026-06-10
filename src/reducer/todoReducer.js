export const todoReducer = (state = [], action) => {

    switch (action.type) {

        case 'add-todo':
            return [...state, action.payload]

        case 'delete-todo':
            const newState = state.filter(todo => todo.id != action.payload)
            return newState

        case 'toggle-todo':
            const newState = state.map(todo => {
              if (todo.id == action.payload)
                todo.done!=todo.done
              return todo
            }
          ) 
          return newState

        default:
            return state

    }

}