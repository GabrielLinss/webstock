import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Routes from './routes';
import GlobalStyle from './global';
import { store, persistor } from './store';
import Toast from './components/Toast'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <GlobalStyle />
                <Toast />
                <Routes />
            </PersistGate>
        </Provider>
    );
}

export default App;
