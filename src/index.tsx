import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './components/redux/state';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
            <App  store={store} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>, document.getElementById('root') as HTMLElement
)


