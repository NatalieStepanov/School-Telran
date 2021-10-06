import TodoActionType from "./TodoActionType";

const init = {
    todos: []
}

const todoReducer = (state = init, { type, payload }) => {
    switch (type) {
        case TodoActionType.addTodo:
            return {
                ...state, todos: [...state.todos, payload.todo]
            }
        case TodoActionType.changeStatus:
            return changeTodoStatus(state, payload.index, payload.status)

        case TodoActionType.removeTodo:
            return removeTodoByIndex(state, payload.index)

        default: return state
    }
}

const changeTodoStatus = (state, index, status) => {
    const tmpTodos = [...state.todos]
    tmpTodos[index] = { ...tmpTodos[index], status: status }
    return {
        ...state,
        todos: tmpTodos
    }
}

const removeTodoByIndex = (state, index) => {
    const tmpTodos = [...state.todos]
    tmpTodos.splice(index, 1)
    return {
        ...state,
        todos: tmpTodos
    }
}

export default todoReducer