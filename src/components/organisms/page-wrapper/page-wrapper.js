import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import { Wrapper } from './page-wrapper-styles';

import HeaderMenu from '../../molecoles/Header-Menu/header-menu'
import MyDrawer from '../../molecoles/Drawer/drawer'
import Footer from '../../molecoles/Footer/footer'
import MyTheme from '../../../theme/theme'
import Container from '../../atoms/container/container'

const PageWrapper = (props) => {
    return (
        <ThemeProvider theme={MyTheme}>
            <HeaderMenu title={'teste'} />
            <Wrapper>
                <MyDrawer />
                <Container >
                    {props.children}
                </Container>
            </Wrapper>
            <Footer />
        </ThemeProvider>
    )
}

export default PageWrapper