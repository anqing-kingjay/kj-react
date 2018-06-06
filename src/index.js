import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './config/rem';
import {Router} from 'react-router';
import routes from './router/index';
import history from './config/history';

ReactDOM.render(
    <Router history={history}>
        { routes }
    </Router>
    , 
    document.getElementById('root')
);
