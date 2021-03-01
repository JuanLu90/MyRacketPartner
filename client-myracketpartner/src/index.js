// DEPENDENCES
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// REDUX
import { Provider } from 'react-redux';
import configureStore from './configureStore';

// STYLES
import 'bootstrap/dist/css/bootstrap.css';

// COMPONENTS
import { createBrowserHistory } from 'history';
import App from './App';

// Create browser history to use in the Redux store
// const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory();

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = window.initialReduxState;
const store = configureStore(initialState, history);
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

serviceWorker.unregister();
