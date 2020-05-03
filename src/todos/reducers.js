import C from '../Constants'


const initialState={isLoading:false,data:[]}

export const todos=(state=initialState,action)=> {
    
    const {type,payload}=action

    switch(type) {
        case C.CREATE_TASK: {
            const {todo}=payload;
            return {
                ...state,
                data: state.data.concat(todo)
            };
        }

        case C.REMOVE_TASK: {
            const {todo}=payload;
            return {
                ...state,
                data:state.data.filter(todoTask => todoTask.id!==todo.id)
            }            
        }

        case C.MARK_TASK_AS_COMPLETE: {
            const {todo: todoUpdate}=payload;
           return {
               ...state,
               data: state.data.map(todo=>{
                if(todo.id==todoUpdate.id){
                    return todoUpdate;
                }
                return todo;
            })
           }
           
        }

        case C.LOAD_TODOS_SUCCESS: {
            const {todos}=payload;
            return {
                ...state,
                isLoading:false,
                data:todos};
        }

        case C.LOAD_TODOS_IN_PROGRESS: {
            return {
                ...state,
                isLoading:true
            }
        }

        case C.LOAD_TODOS_FAILURE:{
            return {
                ...state,
                isLoading:true
            }
        }

        default:
            return state; 
    }
}