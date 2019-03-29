// IMPORT DATA FROM STATIC JSON FILE

import searchSecurities from './searchItemSecurities.json';
import securities from './securities.json';

// COMPONENT

const simulateError = false;

//use https://api.iextrading.com/1.0/ref-data/symbols
const fetchSearchItemSecurities = () => {
    return new Promise((resolve, reject) => {
        // simulate lengthy service call
        setTimeout(() => {
            if (simulateError) {
                reject('Failed to fetch search list of securities');
            } else {
                resolve(searchSecurities);
            }
        }, 100);
    });
};

// use https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb&types=quote
const fetchSecurities = () => {
    new Promise((resolve, reject) => {
        // simulate lengthy service call
        setTimeout(() => {
            if (simulateError) {
                reject('Failed to fetch list of securities');
            } else {
                resolve(securities);
            }
        }, 100);
    });
};

export {fetchSearchItemSecurities, fetchSecurities}