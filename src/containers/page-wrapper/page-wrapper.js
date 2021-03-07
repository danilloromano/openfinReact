import React from 'react'

import Menu from '~/components/Menu/index'
import Footer from '~/components/Footer/footer'
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