import React from 'react'
import containerStyles from './container-styles'

const Container = ({children}) => {
    const classes = containerStyles();

    return (
        <section className={classes.content}>
            {children}
        </section>
    )
}

export default Container
