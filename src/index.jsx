import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as React from 'react';
import { Router, hashHistory } from 'react-router';
import store from './store/store';
import routes from './routes';
import './styles/css/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes}/>
  </Provider>,
  document.getElementById('App')
);
