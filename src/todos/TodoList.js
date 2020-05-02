import React,{useEffect} from 'react'
import './TodoList.css'
import NewTodoForm from './NewTodoForm'
import TodoItem from './TodoItem'
import {connect} from 'react-redux'
import {removeTodo,markTaskAsComplete} from './actions'
import {loadTodos,deleteTodo,updateTodo} from './thunk'

const TodoList=({todos=[],onRemovePressed,onCompletePressed,startLoadingTodos,isLoading})=>{ 
    useEffect(()=>{
        startLoadingTodos();
        console.log(todos)
    },[])
    
    const loadingMessage =<div>Loading...</div>
    const content= <div className="list-wrapper">
            <NewTodoForm/>
            {todos.map(todo=> <TodoItem 
                key={todo.id}
                todo={todo} 
                onRemovePressed={onRemovePressed} 
                onCompletePressed={onCompletePressed}/>)}
        </div>

        return isLoading? loadingMessage : content;
}

const mapStateToProps=state=>({
    isLoading:state.isLoading,
    todos:state.todos,
    
})

const mapDispatchToProps=dispatch=>({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(deleteTodo(id)),
    onCompletePressed: todo => dispatch(updateTodo(todo)),
    
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);