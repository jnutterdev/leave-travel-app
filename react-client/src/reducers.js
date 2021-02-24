import {
    ADD_DESTINATION,
    ADD_DATES
} from './actions';

export function userSearch(state, action) {
    switch(action.type) {
        case ADD_DESTINATION: 
            return {
                ...state, 
                [action.payload.destination]: state[action.payload.destination]
            }
        case ADD_DATES: 
            return {
                ...state, 
                [action.payload.dates]: state[action.payload.dates]
            }
        default: 
            return state;
}
}

