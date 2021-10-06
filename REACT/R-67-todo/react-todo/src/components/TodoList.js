import {connect} from 'react-redux'
import {changeTodoStatus, removeTodoByIndex} from '../todo_store/todoReducer/TodoActionCreator'
import Todo from './Todo'

const TodoList = ({todos, changeStatus, removeTodo}) =>{
    return(
        <ul>
                {
                    todos.map((todo,index)=>
                        <li key = {index}>
                            <Todo
                                index = {index}
                                todo = {todo}
                               
                                statusChangeHandler = {changeStatus}
                                removeHandler = {removeTodo}
                            />
                        </li>)
                }
            </ul>
    )
}

const mapStateToProps = ({TodoReducer})=>{
    return{
        todos: TodoReducer.todos
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        changeTodoStatus: (index, status)=> dispatch(changeTodoStatus(index, status)),
        removeTodo: index => dispatch(removeTodoByIndex(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)