import { combineReducers } from 'redux';
import {
  CHANGE_CARD_AMOUNT,
  SET_GAME_TYPE,
  SET_PLAYERS,
  SET_SELECTED_DECK,
} from '../actions/types';
import gameTypes from '../core/gameTypes';
import createReducer from '../lib/createReducer';

const players = createReducer(5, {
  [SET_PLAYERS](state, action) {
    return action.players;
  },
});

const selectedDeck = createReducer('', {
  [SET_SELECTED_DECK](state, action) {
    return action.selectedDeck;
  },
});

const deck = createReducer([], {
  [SET_SELECTED_DECK](state, action) {
    return action.deck;
  },
  [CHANGE_CARD_AMOUNT](state, action) {
    if (!action.amount) {
      return [...state.filter(c => c.key !== action.card.key)];
    }

    return [
      ...state.filter(c => c.key !== action.card.key),
      {
        key: action.card.key,
        amount: action.amount,
      },
    ];
  },
});

const type = createReducer(gameTypes.balanced, {
  [SET_GAME_TYPE](state, action) {
    return action.gameType;
  },
});

export default combineReducers({
  players,
  deck,
  selectedDeck,
  type,
});
