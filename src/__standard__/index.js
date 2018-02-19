import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../store/index';
import App from './App';
// import DevTools from './containers/DevTools';

/* Client render (optional) */
if (typeof document !== 'undefined') {
  const outlet = document.getElementById('application');
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    outlet
  );
}
