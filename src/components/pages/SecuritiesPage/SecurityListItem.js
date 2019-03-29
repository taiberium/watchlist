// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';

// COMPONENT

const SecurityListItem = ({id, symbol, name}) => (
    <a href="#"
       className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{symbol} ({name})</h5>
        <small className="text-muted">{id}</small>
      </div>
    </a>
);

SecurityListItem.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export {SecurityListItem};