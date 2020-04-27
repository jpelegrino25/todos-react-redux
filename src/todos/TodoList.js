import React from 'react'
import './TodoList.css'
import NewTodoForm from './NewTodoForm'
import TodoItem from './TodoItem'
import {connect} from 'react-redux'
import {removeTodo,markTaskAsComplete} from './actions'

const TodoList=({todos=[],onRemovePressed,onCompletePressed})=>(    
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map(todo=> <TodoItem key={todo.taskName} 
            todo={todo} 
            onRemovePressed={onRemovePressed} 
            onCompletePressed={onCompletePressed}/>)}
    </div>
)

const mapStateToProps=state=>({
    todos:state.todos
})

const mapDispatchToProps=dispatch=>({
    onRemovePressed: taskName => dispatch(removeTodo(taskName)),
    onCompletePressed: taskName => dispatch(markTaskAsComplete(taskName))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);