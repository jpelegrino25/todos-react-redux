import React from 'react'
import styled from 'styled-components'

const TodoItemContainer= styled.div `
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;    
    box-shadow: 0 4px 8px grey;
`

const TodoContainerWithWarning= styled(TodoItemContainer) `
    border-bottom: ${props => (props.done)?'2px solid red':'none'};
`

const Button = styled.button `
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
`

const CompleteButton = styled(Button) `    
    display: inline-block;
    background-color: #22ee22;
`;

const RemoveButton=styled(Button) `    
    display: inline-block;
    background-color: #ee2222;
    margin-left: 8px;
`;

const ButtonContainer= styled.div `
    position: absolute;
    right: 12px;
    bottom: 12px;
`;

const TodoItem=({todo,onRemovePressed,onCompletePressed})=> {
    const Container = todo.completed ? TodoContainerWithWarning : TodoItemContainer;
    return (<Container done={todo.completed}>
        <h3>{todo.taskName}</h3>
        {todo.completed ?
        null :
        <CompleteButton
            onClick={()=>onCompletePressed(todo)}>
            Mask As Complete</CompleteButton>
         }

        <RemoveButton
        onClick={()=> onRemovePressed(todo.id)}>
        Remove</RemoveButton>
    </Container> )

}

export default TodoItem;