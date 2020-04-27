
import C from '../Constants'

export const createTask= taskName=>({
    type: C.CREATE_TASK,
    payload: {taskName}
});

export const removeTodo= taskName=>({
    type:C.REMOVE_TASK,
    payload:{taskName}
});

export const markTaskAsComplete=taskName =>({
    type:C.MARK_TASK_AS_COMPLETE,
    payload:{taskName}
})