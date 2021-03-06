import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './components/Auth.js';

const auth = new Auth();


let state = {};
window.setState = (changes) => {
    state = Object.assign({}, state, changes)
    ReactDOM.render(<App {...state}/>, document.getElementById('root'));
}

/* eslint no-restricted-globals: 0*/
let initialState = {
    name: 'Juicy J',
    location: location.pathname.replace(/^\/?|\/$/g, ""),
    auth
}

window.setState(initialState)
registerServiceWorker();

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
