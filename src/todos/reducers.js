import C from '../Constants'

export const todos=(state=[],action)=> {
    
    const {type,payload}=action

    switch(type) {
        case C.CREATE_TASK: {
            const {taskName}=payload;

            const newTodo={
                taskName,
                isComplete:false
            }
            return state.concat(newTodo);
        }

        case C.REMOVE_TASK: {
            const {taskName}=payload;
            return state.filter(todo => todo.taskName!==taskName);
        }

        case C.MARK_TASK_AS_COMPLETE: {
            const {taskName}=payload;
           return state.map(todo=>{
                if(todo.taskName==taskName){
                    return {...todo,isComplete:true}
                }
                return todo;
            })
        }

        default:
            return state; 
    }
}