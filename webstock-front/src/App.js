import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

import GlobalStyle from './global';

import { store, persistor } from './store';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>

                <Router history={history}>
                    <Routes />
                    <GlobalStyle />
                </Router>

            </PersistGate>
        </Provider>
    );
}

export default App;
