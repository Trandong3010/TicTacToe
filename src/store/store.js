import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import gameReducer from './reducers/game'
import boardReducer from './reducers/board'
import createLogger from 'redux-logger'

const combinereducers = combineReducers({
    gameReducer, boardReducer
});


const store = createStore(combinereducers, applyMiddleware(thunk, createLogger))

export default store