import { combineReducers } from 'redux';

import gameTypes from '../core/gameTypes';
import { SET_SELECTED_DECK } from '../actions/types';

const players = (state = 5, action) => {
    switch (action.type) {
        case 'SET_PLAYERS':
            return action.players;
        default:
            return state;
    }
}

const deck = (state = [], action) => {
    return state;
}

const selectedDeck = (state = '', action) => {
    switch (action.type) {
        case SET_SELECTED_DECK:
            return action.selectedDeck;
        default:
            return state;
    }
}

const type = (state = gameTypes.balanced, action) => {
    return state;
}

const selectedDeckCards = (state = [], action) => {
    switch (action.type) {
        case SET_SELECTED_DECK:
            return action.selectedDeckCards;
        default:
            return state;
    }
}


export default combineReducers({
    players,
    deck,
    selectedDeck,
    selectedDeckCards,
    type,
});