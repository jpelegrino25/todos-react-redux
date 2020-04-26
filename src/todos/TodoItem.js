import React from 'react'
import './TodoItem.css'

const TodoItem=({todo})=>(
    <div className="todo-item-container">
        <h3>{todo.task}</h3>
        <button className="complete-button">Mask As Complete</button>
        <button className="remove-button">Remove</button>
    </div>
)

export default TodoItem;