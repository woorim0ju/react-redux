import {ADD_SUBSCRIBER,REMOVE_SUBSCRIBER} from './types';

const initialState = { //state 초깃값
    count : 100
}

const subscriberReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_SUBSCRIBER: 
        return {
            ...state, 
            count: state.count + 1 
        }
    
        case REMOVE_SUBSCRIBER: 
        return {
            ...state, 
            count: state.count - 1 
        }
        default: return state; 
    }
}

export default subscriberReducer;   