import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import apiMiddleware from '../middleware/api';
import rootReducer from '../reducers';
// import DevTools from '../containers/DevTools';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(apiMiddleware, thunkMiddleware))
);

export default store;

/** TODO: DevTools in static projects
function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}

const enhancer = composeWithDevTools(
  applyMiddleware(apiMiddleware, thunkMiddleware),
  DevTools.instrument()
);

export default function store(initialState) {
  const configureStore = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => configureStore.replaceReducer(require('../reducers').default));
  }

  return configureStore;
}
*/
