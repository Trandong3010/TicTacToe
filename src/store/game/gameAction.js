import {SELECT, HANDLECHANGESIZE} from './gameType'

export const select = () => {
    return {
        type: SELECT
    }
}

export const handleChangeSize = (payload) => {
    return {
        type: HANDLECHANGESIZE,
        payload
    }
}