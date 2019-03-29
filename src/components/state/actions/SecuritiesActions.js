import {fetchSearchItemSecurities} from '../../../services/SecuritiesService';

// FETCH ACTION NAMES

export const FETCH_SECURITIES_ITEMS = 'FETCH_SECURITIES_ITEMS';
export const FETCH_SECURITIES_ITEMS_PENDING = 'FETCH_SECURITIES_ITEMS_PENDING';
export const FETCH_SECURITIES_ITEMS_FULFILLED = 'FETCH_SECURITIES_ITEMS_FULFILLED';
export const FETCH_SECURITIES_ITEMS_REJECTED = 'FETCH_SECURITIES_ITEMS_REJECTED';

export const FETCH_SECURITIES = 'FETCH_SECURITIES';
export const FETCH_SECURITIES_PENDING = 'FETCH_SECURITIES_PENDING';
export const FETCH_SECURITIES_FULFILLED = 'FETCH_SECURITIES_FULFILLED';
export const FETCH_SECURITIES_REJECTED = 'FETCH_SECURITIES_REJECTED';

// ACTION GENERATORS
const fetchSecuritiesSearchItemAction = () => ({
  type: FETCH_SECURITIES_ITEMS,
  payload: fetchSearchItemSecurities()
});

const fetchSecuritiesAction = () => ({
  type: FETCH_SECURITIES,
  payload: fetchSecurities()
});

// EXPORT ACTIONS

export {fetchSecuritiesSearchItemAction as fetchSecurities, fetchSecuritiesAction as fetchSecuriies};