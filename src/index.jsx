import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as React from 'react';
import store from './store/store';

import './styles/css/index.scss';
import App from './components/app';

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('App')
);
