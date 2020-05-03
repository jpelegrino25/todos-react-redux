import React from 'react'
import {connect} from 'react-redux'
import {createTodo} from './thunk'
import styled from 'styled-components'

const FormContainer= styled.div `
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 8px grey;
`

const NewTodoInput = styled.input `
    font-size: 16px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #ddd;
    border-radius: 8px;
    width: 70%;
    outline: none;
`

const NewTodoButton = styled.button `
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin-left: 8px;
    width: 20%;
    background-color: #22ee22;
`

class NewTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={taskName:''}

        this.createTask=this.createTask.bind(this)
    }

    createTask(taskName) {
        const {todos,onCreatePressed}=this.props    
        let isDuplicated=todos.data.some(todo=> todo.taskName==taskName);
        if(!isDuplicated) {
            onCreatePressed(taskName);
            this.setState({taskName:''})
        }
     }

    render() {
        const {taskName}=this.state; 
           
        return (
            <FormContainer>
                <NewTodoInput                
                 type="text"
                 value={taskName}
                 onChange={e=> this.setState({taskName:e.target.value})}
                 placeholder="Type the task name"
                 />
    
                 <NewTodoButton
                 onClick={()=> this.createTask(taskName)}>
                 Create Task</NewTodoButton>
            </FormContainer>
        )
    }
    
}

const mapStateToProps=state=>({
    todos:state.todos
})

const mapDispatchToProps=dispatch=>({
    onCreatePressed: taskName => dispatch(createTodo(taskName))
})

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);