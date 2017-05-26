import { combineReducers } from 'redux';

import gameTypes from '../core/gameTypes';
import { SET_SELECTED_DECK, SET_PLAYERS } from '../actions/types';
import createReducer from '../lib/createReducer';

const players = createReducer(5, {
    [SET_PLAYERS](state, action) {
        return action.players;
    }
});

const selectedDeck = createReducer('', {
    [SET_SELECTED_DECK](state, action) {
        return action.selectedDeck;
    }
});

const deck = createReducer([], {
    [SET_SELECTED_DECK](state, action) {
        return action.deck;
    }
});

const type = createReducer(gameTypes.balanced, {});

export default combineReducers({
    players,
    deck,
    selectedDeck,
    type,
});