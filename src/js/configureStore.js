import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reduxLocalStorage from 'redux-localstorage';
import reducer from './reducers';

const persistState = reduxLocalStorage(undefined, {
  key: 'werewolfStorage',
});
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default function configureStore({ history }) {
  const historyMiddleware = routerMiddleware(history);

  return createStore(reducer,
        composeEnhancers(
            applyMiddleware(thunk, historyMiddleware),
            persistState,
        ),
    );
}
