export const todoReducer = (state = [], action) => {

    switch (action.type) {

        case 'add-todo':
            return [...state, action.payload]

        case 'delete-todo':
            const newState = state.filter(todo => todo.id != action.payload)
            return newState

        case 'toggle-todo':
            

        default:
            return state

    }

}