import {createStore} from 'redux'
import gameReducer from './game/gameReducer'

const store = createStore(gameReducer)

export default store