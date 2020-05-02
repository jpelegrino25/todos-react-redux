
import C from '../Constants'

export const createTask= todo=>({
    type: C.CREATE_TASK,
    payload: {todo}
});

export const removeTodo= todo=>({
    type:C.REMOVE_TASK,
    payload:{todo}
});

export const markTaskAsComplete=todo =>({
    type:C.MARK_TASK_AS_COMPLETE,
    payload:{todo}
});

export const loadTodosInProgress=()=>({
    type:C.LOAD_TODOS_IN_PROGRESS
});

export const loadTodosSuccess= todos=> ({
    type:C.LOAD_TODOS_SUCCESS,
    payload: {todos}
});

export const loadTodosFailure =()=> ({
    type:C.LOAD_TODOS_FAILURE
})