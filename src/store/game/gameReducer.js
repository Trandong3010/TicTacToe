import {SELECT, HANDLECHANGESIZE} from './gameType'
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

function handlChange(value) {
    this.setState({ sizeGameBoard: value });
}

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT: return {
            ...state,
        }
        case HANDLECHANGESIZE:
            return handlChange(1)
    
        default: return state
    }
}

export default gameReducer