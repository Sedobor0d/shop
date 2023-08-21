import React from 'react';
import Header from '../pages/Header';
import { ThemeProvider, createTheme } from '@mui/material';
import Shop from '../pages/Shop';

const theme = createTheme({
   colors: {
      main: 'rgb(23, 23, 23)',
      bgNavBar: '#61ABDA',

      darkBlue: '#042B44',
      lightBlue: '#61ABDA',

      heading: '#A1E65F',
   }
});

const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <Header />
         <Shop />
      </ThemeProvider>
   );
};

export default App;