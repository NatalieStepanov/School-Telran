import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import AppReducer from './appReducer/AppReducer'
import TodoReducer from './todoReducer/TodoReducer'

const state = combineReducers({
    TodoReducer,
    AppReducer
})

const store = createStore(state, applyMiddleware(thunk))

export default store
