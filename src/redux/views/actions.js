import {ADD_VIEW, REMOVE_VIEW} from './types';


export const addView = (num) => {
    return {
        type: ADD_VIEW,
        payload: Number(num)//num을 숫자로 변환
    }
}


export const removeView = (num) => {
    return {
        type: REMOVE_VIEW,
        payload: Number(num)
    }
}