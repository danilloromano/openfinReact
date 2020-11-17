import React, { useCallback, useState } from 'react'
import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import IconButton from '@material-ui/core/IconButton'

import drawerStyles from './drawer-style'
import MenuItem from '../../atoms/Menu-Item/menu-item'
import { connect } from 'react-redux'
import { updateDrawerState } from '../../../redux/actions/actions'

const MyDrawer = ({ drawerState, updateDrawerState }) => {

    const classes = drawerStyles()
    const defaultDrawerWidth = '200px'
    const [drawerWidth, setDrawerWidth] = useState(defaultDrawerWidth)
    const minDrawerWidth = 60
    const maxDrawerWidth = 300

    const handleMouseMove = useCallback(event => {
        const newWidth = event.clientX - document.body.offsetLeft
        if (newWidth > minDrawerWidth && newWidth < maxDrawerWidth) {
            setDrawerWidth(newWidth)
        }
    }, [])

    const handleMouseDown = (event) => {
        document.addEventListener("mouseup", handleMouseUp, true)
        document.addEventListener("mousemove", handleMouseMove, true)
    }

    const handleMouseUp = () => {
        document.removeEventListener("mouseup", handleMouseUp, true)
        document.removeEventListener("mousemove", handleMouseMove, true)
    }

    return (
        <Drawer
            className={clsx(classes.drawerClosed, drawerState && classes.drawerOppened)}
            variant="persistent"
            classes={{ paper: classes.drawerPaper }}
            anchor="left"
            open={drawerState}
            PaperProps={{ style: { width: drawerWidth } }}
        >
            <div
                id="dragger"
                onMouseDown={event => handleMouseDown(event)}
                className={classes.dragger}
            />
            <div className={classes.drawerHeader}>
                <IconButton onClick={() => updateDrawerState(false)}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                <MenuItem text={'Sergio Malandro'}>
                    <InboxIcon />
                </MenuItem>
            </List>
            <Divider />
            <List>
                <MenuItem text={'Xuxa do Malandro e do Pelé'}>
                    <MailIcon />
                </MenuItem>
            </List>
        </Drawer>
    )
}

const mapStateToProps = (state) => {
    return { drawerState: state.getIn(['drawerState']) }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDrawerState: (value) => dispatch(updateDrawerState(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDrawer)