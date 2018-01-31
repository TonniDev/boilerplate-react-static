import React from 'react';
import {render} from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Template from './Template';
import App from './App';
// import DevTools from './containers/DevTools';

/* Client render (optional) */
if (typeof document !== 'undefined') {
  const outlet = document.getElementById('outlet');
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    outlet
  );
}

/* Exported static site renderer */
export default (locals, callback) => {
  const html = ReactDOMServer.renderToStaticMarkup(
    <Provider store={store}>
      <StaticRouter location={locals.path} context={{}}>
        <Template>
          <App />
        </Template>
      </StaticRouter>
    </Provider>
  );
  callback(null, html);
};
