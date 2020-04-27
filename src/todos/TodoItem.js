import React from 'react'
import './TodoItem.css'

const TodoItem=({todo,onRemovePressed,onCompletePressed})=>(
    <div className="todo-item-container">
        <h3>{todo.taskName}</h3>
        {!todo.isComplete &&
        <button 
            onClick={()=>onCompletePressed(todo.taskName)}
            className="completed-button">Mask As Complete</button>
         }

        <button
        onClick={()=> onRemovePressed(todo.taskName)} 
        className="remove-button">Remove</button>
    </div>
)

export default TodoItem;