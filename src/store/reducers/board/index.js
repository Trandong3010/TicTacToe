import { HANDLECHANGESIZE, HANDLECLICKGAME, JUMPTO, HANDLECLICKBOARD } from '../../actions'
import {calculateWinner} from '../../../common'
const initialState = {
    squares: Array(9).fill(null),
    xIsNext: true
}

const board = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default board