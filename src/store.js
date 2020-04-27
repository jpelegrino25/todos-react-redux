import {createStore,combineReducers} from 'redux'
import {todos} from './todos/reducers'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const reducers={
    todos
}

const persistentConfig= {
    key:'root',
    storage,
    stateReconciler:autoMergeLevel2
}

const rootReducer=combineReducers(reducers);
const persistentReducer=persistReducer(persistentConfig,rootReducer);

export const configureStore =()=> createStore(persistentReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),);