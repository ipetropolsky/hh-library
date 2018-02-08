import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './containers/BookList';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import libraryApp from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';

const store = createStore(libraryApp, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            <header className="header">
                <h1 className="header-brand">Библиотека</h1>
            </header>
            <BookList/>
        </React.Fragment>
    </Provider>,
    document.getElementById('root')
);
