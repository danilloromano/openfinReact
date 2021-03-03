import React from 'react';
import MyRoutes from './routes/routes'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import MyTheme from './theme/theme'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={MyTheme}>
        <CssBaseline />
        <MyRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
