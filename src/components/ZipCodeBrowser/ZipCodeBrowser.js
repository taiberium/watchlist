// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// IMPORT PROJECT REFERENCES

import { fetchSecurities } from '../state/actions/SecuritiesActions';
import { ZipCodeList } from './ZipCodeList';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';


// COMPONENT

class ZipCodeBrowser extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchZipCodes();
    }

    render() {
        return (
            <div>
                {
                    this.props.fetched && <ZipCodeList zipCodes={this.props.zipCodes} />
                }
                {
                    <LoadingIndicator busy={this.props.fetching} />
                }
                {
                    this.props.failed && <Error message="Failed to fetch list of zip codes" />
                }
            </div>
        );
    }
}

ZipCodeBrowser.propTypes = {
    fetchZipCodes: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    zipCodes: PropTypes.array.isRequired
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching, fetched, failed, zipCodes } = state.securities;

    return { fetching, fetched, failed, zipCodes: securities };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchZipCodes: fetchSecurities }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(ZipCodeBrowser);


// EXPORT COMPONENT

export { hoc as ZipCodeBrowser };