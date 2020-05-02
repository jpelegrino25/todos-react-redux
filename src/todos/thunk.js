import {loadTodosInProgress,loadTodosFailure,loadTodosSuccess,createTask,removeTodo,markTaskAsComplete} from './actions'
import TodoService from '../services/TodoService.js'

export const loadTodos =()=> async (dispatch,getState) => {
    
    try {
        dispatch(loadTodosInProgress());       
       
       TodoService.loadTodos().then(response=>dispatch(loadTodosSuccess(response.data)));
        
    }catch(e) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e))
    }
}

export const createTodo =taskName => async (dispatch) => {
    const todo={
        taskName: taskName,
        createdOn: new Date(),
        status: 1
    }

    try{
        TodoService.create(todo).then(response=>{
            dispatch(createTask(response.data))
        })
    }catch(e) {
        dispatch(displayAlert(e))
    }
}

export const deleteTodo=id => async (dispatch) => {
    try {
        TodoService.remove(id).then(response=> {
            dispatch(removeTodo(response.data));
        })
    }catch(e) {
        dispatch(displayAlert(e))
    }
}


export const updateTodo =todo => async (dispatch) => {
   
    try{
        TodoService.update(todo).then(response=>{
            dispatch(markTaskAsComplete(response.data))
        })
    }catch(e) {
        dispatch(displayAlert(e))
    }
}


export const displayAlert= taskName => () => {
    alert(taskName)
}