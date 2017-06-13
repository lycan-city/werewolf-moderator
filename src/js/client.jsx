import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from '../serviceWorker/registerServiceWorker';

import App from './components/App';

import configureStore from './configureStore';

registerServiceWorker();
const history = createHistory();
const store = configureStore({ history });

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>, document.getElementById('app'));
