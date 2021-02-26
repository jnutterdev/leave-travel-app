import { createStore } from 'redux';
import { userSearch } from './reducers'

import { devToolsEnhancer } from 'redux-devtools-extension';

const destination = [];
const dates = [];

const defaultState = {
    destination,
    dates,
};

export const store = createStore(userSearch, defaultState, devToolsEnhancer());