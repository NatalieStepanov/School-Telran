import TodoActionType from "./TodoActionType";
import { showLoader, hideLoader } from "../appReducer/AppActionCreator";

export const removeTodoByIndex = (index) =>{
    return{
        type: TodoActionType.removeTodo,
        payload: {
            index
        }
    }
}

export const changeTodoStatus = (index, status)=>{
    return{
        type: TodoActionType.changeStatus,
        payload: {
            index,
            status
        }
    }
}

export const addTodo = (text) =>{
    return dispatch =>{
        dispatch(showLoader())
        setTimeout(()=>{ 
                dispatch(_addTodo(text))
                dispatch(hideLoader())
            
            
        },2000)
    }
}

const _addTodo = (text) =>{
    return{
        type: TodoActionType.addTodo,
        payload: {
            todo:{
                text,
                status: false
            }
        }
    }
}