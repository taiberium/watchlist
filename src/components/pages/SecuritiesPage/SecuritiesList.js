// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// IMPORT PROJECT REFERENCES

import { SecurityListItem } from './SecurityListItem';


// COMPONENT

const renderList = securities => (
    <div className="list-group animated fadeIn">
        {securities.map(security => renderListItem(security))}
    </div>
);

const renderListItem = security => (
    <Fragment key={security.iexId}>
        <SecurityListItem symbol={security.symbol} name={security.name} id={security.iexId} />
    </Fragment>
);

const SecuritiesList = (props) => <Fragment>{renderList(props.securities)}</Fragment>;

SecuritiesList.propTypes = {
    securities: PropTypes.array.isRequired
};

export { SecuritiesList };