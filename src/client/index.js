import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './components/stores/configureStore';
import * as actions from './components/actions';

import AppPage from './components/app';


const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
      <AppPage />
  </Provider>,
  document.getElementById('root'));

module.hot.accept();
