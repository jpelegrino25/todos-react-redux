import {createStore,combineReducers, applyMiddleware} from 'redux'
import {todos,isLoading} from './todos/reducers'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducers={
    todos,    
}

const persistentConfig= {
    key:'root',
    storage,
    stateReconciler:autoMergeLevel2
}

const rootReducer=combineReducers(reducers);
const persistentReducer=persistReducer(persistentConfig,rootReducer);

export const configureStore =()=> 
    createStore(
        persistentReducer,
        composeWithDevTools(
            applyMiddleware(thunk)
        ));