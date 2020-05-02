import C from '../Constants'


export const isLoading = (state=false,action) => {
    const {type}=action;

    switch(type) {
        case C.LOAD_TODOS_IN_PROGRESS:
            return true;
        case C.LOAD_TODOS_SUCCESS:
        case C.LOAD_TODOS_FAILURE:
            return false;
        default:
            return state; 
    }
}

export const todos=(state=[],action)=> {
    
    const {type,payload}=action

    switch(type) {
        case C.CREATE_TASK: {
            const {todo}=payload;
            return state.concat(todo);
        }

        case C.REMOVE_TASK: {
            const {todo}=payload;
            return state.filter(todoTask => todoTask.id!==todo.id);
        }

        case C.MARK_TASK_AS_COMPLETE: {
            const {todo: todoUpdate}=payload;
           return state.map(todo=>{
                if(todo.id==todoUpdate.id){
                    return todoUpdate;
                }
                return todo;
            })
        }

        case C.LOAD_TODOS_SUCCESS: {
            const {todos}=payload;
            return todos;
        }

        case C.LOAD_TODOS_IN_PROGRESS:
        case C.LOAD_TODOS_FAILURE:

        default:
            return state; 
    }
}