import React from 'react';
import Header from './Header';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
   colors: {
      main: 'rgb(23, 23, 23)',
      bgNavBar: '#61ABDA',

      textNav: '#042B44',
      bgNav: '#61ABDA',

      hoverTextNav: '#61ABDA',
      hoverbgNav: '#042B44',

      heading: 'white',
   }
});

const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <div className='App'>
            <div className='container'>
               <Header />
            </div>
         </div>
      </ThemeProvider>
   );
};

export default App;