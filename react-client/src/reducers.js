import {
    ADD_DESTINATION,
    ADD_DATES
} from './actions';

export function userSearch(state, action) {
    switch(action.type) {
        case ADD_DESTINATION: 
            return {
                ...state, userDestination: state.userDestination
            }
        case ADD_DATES: 
            return {
                ...state, userDates: state.userDates
            }
        default: 
            return state;
}
}

