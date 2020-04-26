import React from 'react'
import './TodoList.css'
import NewTodoForm from './NewTodoForm'
import TodoItem from './TodoItem'

const TodoList=({todos=[]})=>(    
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map(todo=> <TodoItem todo={todo}/>)}
    </div>
)

export default TodoList;