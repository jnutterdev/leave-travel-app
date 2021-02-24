import { createStore } from 'redux';
import { userSearch } from './reducers'

const destination = [];
const dates = [];

const defaultState = {
    destination,
    dates,
};

export const store = createStore(userSearch, defaultState);