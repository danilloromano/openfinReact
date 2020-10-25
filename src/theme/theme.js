import { createMuiTheme } from '@material-ui/core/styles';
import { grey, green } from '@material-ui/core/colors';

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      light: grey[500],
      main: grey[700],
      dark: grey[700],
      contrastText: '#ffffff'
    },
    secondary: {
        light: green['A200'],
        main: green['A400'],
        dark: green['A700'],
        contrastText: '#000000',
      },
  },
});

export default MyTheme
