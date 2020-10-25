import React from 'react'
import clsx from 'clsx';

import containerStyles from './container-styles'
import { connect } from 'react-redux';


const Container = ({children, drawerState}) => {
    const classes = containerStyles();

    return (
        <section className={clsx(classes.content, drawerState && classes.contentShift)}>
            {children}
        </section>
    )
}

const mapStateToProps = (state) => {
    return { drawerState: state.drawerState }
}

export default connect(mapStateToProps)(Container)
