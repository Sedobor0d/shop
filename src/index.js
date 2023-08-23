import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';
import store from './components/store/index'

const theme = createTheme({
    colors: {
        main: 'rgb(23, 23, 23)',
        bgNavBar: '#61ABDA',

        darkBlue: '#042B44',
        lightBlue: '#61ABDA',

        heading: '#A1E65F',
    }
});

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App tab="home" />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
