import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const toDeploy = true;
const appWithRoute = (toDeploy)
  ? <HashRouter><App /></HashRouter>
  : <BrowserRouter><App /></BrowserRouter>;

ReactDOM.render(
  appWithRoute,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
