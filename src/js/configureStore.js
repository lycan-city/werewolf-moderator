import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import reducer from './reducers';

export default function configureStore() {
    return createStore(reducer,
        compose(
            applyMiddleware(logger),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        ),
    );
}