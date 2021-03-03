import React from 'react'

import Menu from '../../molecoles/Menu/index'
import Footer from '../../molecoles/Footer/footer'
import styles from './page-wrapper-styles';

const PageWrapper = ({ children }) => {
    const classes = styles();

    return (
        <main className={classes.main}>
            <Menu />
            <div className={classes.container}>
                {children}
            </div>
            <Footer />
        </main>
    )
}

export default PageWrapper