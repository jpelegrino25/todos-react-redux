import React from 'react'
import './NewTodoForm.css'

class NewTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={task:''}
    }
    render() {
        const {task}=this.state;
        return (
            <div className="new-todo-form">
                <input
                className="new-todo-input" 
                 type="text"
                 value={task}
                 onChange={e=> this.setState({task:e.target.value})}
                 placeholder="Type the task name"
                 />
    
                 <button className="new-todo-button">Create Task</button>
            </div>
        )
    }
    
}

export default NewTodoForm;