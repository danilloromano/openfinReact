import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from '@material-ui/core/Typography';

import footerStyles from './footer-style'

const Footer = ({title}) => {
    const classes = footerStyles();

    return (
        <BottomNavigation className={classes.root} color={'primary'}>
            <Typography variant="h6" className={classes.title}>{title}</Typography>
        </BottomNavigation>
    );
}

export default Footer