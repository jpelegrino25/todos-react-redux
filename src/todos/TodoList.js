import React,{useEffect} from 'react'
import styled from 'styled-components'
import NewTodoForm from './NewTodoForm'
import TodoItem from './TodoItem'
import {connect} from 'react-redux'
import {loadTodos,deleteTodo,updateTodo} from './thunk'
import {getTodos,getTodosLoading,getCompleteTodos,getIncompleteTodos} from './selectors'

const TodoList=({incompleteTodos,completeTodos,onRemovePressed,onCompletePressed,startLoadingTodos,isLoading})=>{ 
    useEffect(()=>{
        startLoadingTodos();
        
    },[]);

    const ListWrapper = styled.div `
        max-width: 700px;
        margin: auto;
    `;
    
    const loadingMessage =<div>Loading...</div>
    const content= <ListWrapper>
            <NewTodoForm/>
            <h3>Complete todos</h3>
            {completeTodos.map(todo=> <TodoItem 
                key={todo.id}
                todo={todo} 
                onRemovePressed={onRemovePressed} 
                onCompletePressed={onCompletePressed}/>)}

            <h3>Incomplete todos</h3>
            {incompleteTodos.map(todo=> <TodoItem 
                key={todo.id}
                todo={todo} 
                onRemovePressed={onRemovePressed} 
                onCompletePressed={onCompletePressed}/>)}
        </ListWrapper>

        return isLoading? loadingMessage : content;
}

const mapStateToProps=state=>({
    isLoading:getTodosLoading(state),
    completeTodos:getCompleteTodos(state),
    incompleteTodos:getIncompleteTodos(state)

    
})

const mapDispatchToProps=dispatch=>({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(deleteTodo(id)),
    onCompletePressed: todo => dispatch(updateTodo(todo)),
    
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);