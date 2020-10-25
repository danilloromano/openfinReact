import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';

import drawerStyles from './drawer-style'
import { connect } from 'react-redux';
import { updateDrawerState } from '../../../redux/actions/actions'

const MyDrawer = ({drawerState, updateDrawerState}) => {

    const classes = drawerStyles();

    return (
        <Drawer
            className={clsx(classes.drawerClosed, drawerState && classes.drawerOppened)}
            variant="persistent"
            classes={{paper: classes.drawerPaper}}
            anchor="left"
            open={drawerState}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={() => updateDrawerState(false)}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                {['Inbox'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

const mapStateToProps = (state) => {
    return { drawerState: state.drawerState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDrawerState: (value) => dispatch(updateDrawerState(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDrawer)