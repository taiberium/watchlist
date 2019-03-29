// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { FetchSearchItemSecuritiesReducer } from './FetchSearchItemSecuritiesReducer';
import { FetchSecuritiesReducer} from "./FetchSecuritiesReducer";

// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    searchItemSecurities: FetchSearchItemSecuritiesReducer,
    securities: FetchSecuritiesReducer
});