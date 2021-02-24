import { createMuiTheme } from '@material-ui/core/styles';
import { deepOrange, grey } from '@material-ui/core/colors';

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      light: grey[700],
      main: grey[800],
      dark: grey[900],
      contrastText: '#FFFFFF',
    },
    secondary: {
        light: deepOrange[700],
        main: deepOrange[800],
        dark: deepOrange[900],
        contrastText: '#FFFFFF',
    },
    // action: {
    //   hover: 'rgb(87,87,87)',
    // }
  },
  background: {
    main: grey[700],
    contrastText: '#ffffff'
  }
});

export default MyTheme
