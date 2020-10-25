import { createMuiTheme } from '@material-ui/core/styles';
import { indigo, yellow } from '@material-ui/core/colors';

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      light: indigo[500],
      main: indigo[700],
      dark: indigo[900],
      contrastText: '#FFFFFF',
    },
    secondary: {
        light: yellow['A200'],
        main: yellow['A400'],
        dark: yellow['A700'],
        contrastText: '#FFFFFF',
      },
  },
  background: {
    main: '#FFFFFF',
    contrastText: '#000000'
  }
});

export default MyTheme
