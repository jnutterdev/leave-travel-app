import {
    ADD_DESTINATION,
    ADD_DATES
} from './actions';

export function userSearch(state, action) {
    console.log(action.payload);
    switch(action.type) {
        case ADD_DESTINATION: 
            return {
                ...state, 
                destination: [action.payload]
            }
        case ADD_DATES: 
            return {
                ...state, 
                dates: [action.payload]
            }
        default: 
            return state;
}
}

