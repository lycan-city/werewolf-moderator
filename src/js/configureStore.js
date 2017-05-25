import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import reducer from './reducers';
import werewolfService from './services/werewolf';

const currentDeck = Object.keys(werewolfService.getDecks())[0];

export default function configureStore () {
    return createStore(reducer,
        { currentDeck },
        compose(
            applyMiddleware(logger),
        ),
    );
}