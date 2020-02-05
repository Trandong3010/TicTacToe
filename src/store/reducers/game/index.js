import { HANDLECHANGESIZE, HANDLECLICKGAME, JUMPTO } from '../../actions'
import {calculateWinner} from '../../../common'
const initialState = {
    history: [{
        squares: Array(9).fill(null),
    }],
    xIsNext: true,
    stepNumber: 0,
    size: [
        { id: 0, name: 'default' },
        { id: 1, name: '3 x 3' },
        { id: 2, name: '4 x 4' },
        { id: 3, name: '5 x 5' },
        { id: 4, name: '6 x 6' },
        { id: 5, name: '7 x 7' },
        { id: 6, name: '8 x 8' },
        { id: 7, name: '9 x 9' },
        { id: 8, name: '10 x 10' }
    ],
    sizeGameBoard: 0
}


const game = (state = initialState, action) => {
    switch (action.type) {
        case HANDLECHANGESIZE:
            return {
                ...state,
                sizeGameBoard: action.payload
            }
        case HANDLECLICKGAME: 
            const history = state.history.slice(0, state.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            if(calculateWinner(squares) || squares[action.payload]){
                return;
            }
            squares[action.payload] = state.xIsNext ? 'X' : 'O';
            return {
                ...state,
                history: state.history.concat([{squares: squares}]),
                xIsNext: !state.xIsNext,
                stepNumber: history.length
            }
        case JUMPTO:
            return {
                stepNumber: action.payload,
                xIsNext: (action.payload % 2) === 0
            }
        default: return state
    }
}

export default game