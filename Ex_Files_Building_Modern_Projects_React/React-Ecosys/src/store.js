import { createStore, combineReducers } from 'redux';

const reducer = {} ;

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
