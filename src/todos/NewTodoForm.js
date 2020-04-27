import React from 'react'
import './NewTodoForm.css'
import {connect} from 'react-redux'
import {createTask} from './actions'

class NewTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={taskName:''}

        this.createTask=this.createTask.bind(this)
    }

    createTask(taskName) {
        const {todos,onCreatePressed}=this.props    
        let isDuplicated=todos.some(todo=> todo.taskName==taskName);
        if(!isDuplicated) {
            onCreatePressed(taskName);
            this.setState({taskName:''})
        }
     }

    render() {
        const {taskName}=this.state; 
           
        return (
            <div className="new-todo-form">
                <input
                className="new-todo-input" 
                 type="text"
                 value={taskName}
                 onChange={e=> this.setState({taskName:e.target.value})}
                 placeholder="Type the task name"
                 />
    
                 <button
                 onClick={()=> this.createTask(taskName)} 
                 className="new-todo-button">Create Task</button>
            </div>
        )
    }
    
}

const mapStateToProps=state=>({
    todos:state.todos
})

const mapDispatchToProps=dispatch=>({
    onCreatePressed: taskName => dispatch(createTask(taskName))
})

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);