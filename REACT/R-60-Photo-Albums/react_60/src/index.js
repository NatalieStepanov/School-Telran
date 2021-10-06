import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import store from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <Router>
    <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


