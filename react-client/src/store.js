import { createStore } from 'redux';
import { userSearch } from './reducers'

import { devToolsEnhancer } from 'redux-devtools-extension';

const destination = [];
const dates = [];
const numberOfPeople = [];

const defaultState = {
    destination,
    dates,
    numberOfPeople
};

export const store = createStore(userSearch, defaultState, devToolsEnhancer());