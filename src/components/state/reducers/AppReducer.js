// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { FetchSecuritiesReducer } from './FetchSecuritiesReducer';


// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    zipCodes: FetchSecuritiesReducer
});