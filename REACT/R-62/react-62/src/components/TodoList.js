import TodoRow from './TodoRow'
import { connect } from 'react-redux'


const TodoList=({todos, changeStatus, removeTodo})=> {
    return(
        <ul>
            {todos.map((todo, index)=>{
                return(
                <li key = {index}>
                    <TodoRow todo = {todo} 
                            index = {index}
                            changeStatus = {changeStatus}
                            removeTodo = {removeTodo}/>
                </li>
                )
            })}
        </ul>
    )
}

const mapStateToProps = ({todosReducer}) =>{
    return{
        todos:todosReducer.todos || []
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        changeStatus: (index, status) => dispatch({type: CHANGE_STATUS, payload:{index, status}}),
        removeTodo: (index)=> dispatch({type:REMOVE_TODO, payload:{index}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)