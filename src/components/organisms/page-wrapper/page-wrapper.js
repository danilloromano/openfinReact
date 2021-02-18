import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import { Wrapper } from './page-wrapper-styles';

import Menu from '../../molecoles/Menu/index'
import Footer from '../../molecoles/Footer/footer'
import MyTheme from '../../../theme/theme'
import Container from '../../atoms/container/container'

const PageWrapper = (props) => {
    return (
        <ThemeProvider theme={MyTheme}>
            <Menu />
            <Wrapper>
                <Container >
                    {props.children}
                </Container>
            </Wrapper>
            <Footer />
        </ThemeProvider>
    )
}

export default PageWrapper