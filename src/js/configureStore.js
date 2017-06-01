import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers';

export default function configureStore({ history }) {
    const historyMiddleware = routerMiddleware(history);
    
    return createStore(reducer,
        compose(
            applyMiddleware(thunk, historyMiddleware, logger),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        ),
    );
}