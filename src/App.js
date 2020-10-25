import React from 'react';
import MyRoutes from './routes/routes'
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';

 const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <MyRoutes />
    </div>
  );
}

export default App;
