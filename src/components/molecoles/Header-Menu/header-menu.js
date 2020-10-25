import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { updateDrawerState } from '../../../redux/actions/actions'
import headerStyles from './header-meu-style';

const HeaderMenu = ({ drawerState, updateDrawerState }) => {
    const classes = headerStyles();
    console.log('drawerState', drawerState)
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.tollbar}>
                    <IconButton
                        aria-label="open drawer"
                        onClick={() => updateDrawerState(true)}
                        edge="start"
                        className={clsx(classes.menuButton, drawerState && classes.hide)}>
                            <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { drawerState: state.drawerState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDrawerState: (value) => dispatch(updateDrawerState(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu)