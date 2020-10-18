import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { gray, green } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: gray[500],
      main: gray[700],
      dark: gray[700],
      contrastText: '#ffffff'
    },
    secondary: {
        light: green['A200'],
        main: green['A400'],
        dark: green['A700'],
        contrastText: '#000',
      },
  },
});

export default MyTheme = (props) => {
 return (
  <ThemeProvider theme={theme}>
    { props.children }
  </ThemeProvider>
 )
}