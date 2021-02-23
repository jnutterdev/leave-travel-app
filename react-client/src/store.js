import { createStore } from 'redux';
import { userSearch } from './reducers'

const location = [];
const dates = [];

const defaultState = {
    location,
    dates,
};

export const store = createStore(userSearch, defaultState);