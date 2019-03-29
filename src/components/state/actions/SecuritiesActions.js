import { fetchSecurities } from '../../../services/SecuritiesService';

// FETCH ZIPCODES ACTION NAMES

export const FETCH_SECURITIES = 'FETCH_SECURITIES';
export const FETCH_SECURITIES_PENDING = 'FETCH_SECURITIES_PENDING';
export const FETCH_SECURITIES_FULFILLED = 'FETCH_SECURITIES_FULFILLED';
export const FETCH_SECURITIES_REJECTED = 'FETCH_SECURITIES_REJECTED';


// ACTION GENERATORS

const fetchSecuritiesAction = () => ({
    type: FETCH_SECURITIES,
    payload: fetchSecurities()
});


// EXPORT ACTIONS

export { fetchSecuritiesAction as fetchSecurities };