import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import reducer from './reducers';

export default function configureStore () {
    return createStore(reducer,
        applyMiddleware(logger),
    );
}