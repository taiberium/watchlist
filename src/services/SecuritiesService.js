// IMPORT DATA FROM STATIC JSON FILE

import securities from './securities.json';


// COMPONENT

const simulateError = false;

export const fetchSecurities = () => {
    return new Promise((resolve, reject) => {
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