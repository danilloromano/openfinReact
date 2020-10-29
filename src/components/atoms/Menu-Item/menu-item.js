import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import containerStyles from './styles'

const MenuItem = ({ children, text }) => {
    const classes = containerStyles();

    return (
        <ListItem button className={classes.container}>
            <ListItemIcon>
                {children}
            </ListItemIcon>
            <ListItemText className={classes.text} primary={text} />
        </ListItem>
    )
}

export default MenuItem