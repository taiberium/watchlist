import {
    FETCH_SECURITIES_ITEMS_PENDING,
    FETCH_SECURITIES_ITEMS_FULFILLED,
    FETCH_SECURITIES_ITEMS_REJECTED
} from '../actions/SecuritiesActions';


// INITIALIZE STATE

const initialState = {
    securities: [],
    fetching: false,
    fetched: false,
    failed: false
};


// REDUCER
export const FetchSearchItemSecuritiesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SECURITIES_ITEMS_PENDING:
            return {
                ...state,
                securities: [],
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_SECURITIES_ITEMS_FULFILLED:
            return {
                ...state,
                securities: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_SECURITIES_ITEMS_REJECTED:
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