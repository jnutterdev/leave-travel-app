export const ADD_DESTINATION = 'ADD_DESTINATION';
export const ADD_DATES = 'ADD_DATES';
export const ADD_PEOPLE = 'ADD_PEOPLE';

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

export function actionAddPeople(numberOfPeople) {
    return {
        type: ADD_PEOPLE,
        payload: numberOfPeople
    }
};