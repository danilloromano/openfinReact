import React from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import styles from './styles';

const Loading = ({ loading }) => {
    const classes = styles();

    return (
        loading ?
        <div className={classes.container}>
            <CircularProgress />
        </div> : null
    )
        
};

const mapStateToProps = (state) => ({ loading: state.loading });

export default connect(mapStateToProps, null)(Loading);