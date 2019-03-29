// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux/index';

// IMPORT PROJECT REFERENCES

import { fetchSecurities } from '../../state/actions/SecuritiesActions';
import { SecuritiesList } from './SecuritiesList';
import { LoadingIndicator } from '../../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../../shared/Error/Error';


// COMPONENT

class SecuritiesPage extends Component {

    componentDidMount() {
        this.props.fetchSecurities();
    }

    render() {
        return (
            <div>
                {
                    this.props.fetched && <SecuritiesList securities={this.props.securities} />
                }
                {
                    <LoadingIndicator busy={this.props.fetching} />
                }
                {
                    this.props.failed && <Error message="Failed to fetch list of securities" />
                }
            </div>
        );
    }
}

SecuritiesPage.propTypes = {
    fetchSecurities: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    securities: PropTypes.array.isRequired
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching, fetched, failed, securities } = state.securities;
    return { fetching, fetched, failed, securities };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchZipCodes: fetchSecurities }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(SecuritiesPage);


// EXPORT COMPONENT

export { hoc as SecuritiesPage };