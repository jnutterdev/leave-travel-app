export const ADD_DESTINATION = 'ADD_DESTINATION';
export const ADD_DATES = 'ADD_DATES';

export function actionAddDestination(destination) {
    return {
        type: ADD_DESTINATION,
        payload: destination
    }
};

export function actionAddDates(dates) {
    return {
        type: ADD_DATES,
        payload: dates
    }
};