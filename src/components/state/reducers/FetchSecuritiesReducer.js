import {
    FETCH_SECURITIES_PENDING,
    FETCH_SECURITIES_FULFILLED,
    FETCH_SECURITIES_REJECTED
} from '../actions/SecuritiesActions';


// INITIALIZE STATE

const initialState = {
    securities: [],
    fetching: false,
    fetched: false,
    failed: false
};


// REDUCER

export const FetchSecuritiesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SECURITIES_PENDING:
            return {
                ...state,
                securities: [],
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_SECURITIES_FULFILLED:
            return {
                ...state,
                securities: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_SECURITIES_REJECTED:
            return {
                ...state,
                securities: [],
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};