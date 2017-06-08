import { combineReducers } from 'redux';

import werewolfService from '../services/werewolf';
import {
    SET_SELECTED_DECK,
    SET_PLAYERS,
    CHANGE_CARD_AMOUNT,
    SET_GAME_TYPE,
} from '../actions/types';
import createReducer from '../lib/createReducer';

const players = createReducer(5, {
  [SET_PLAYERS]: (state, action) => action.players,
});

const selectedDeck = createReducer('', {
  [SET_SELECTED_DECK]: (state, action) => action.selectedDeck,
});

const deck = createReducer([], {
  [SET_SELECTED_DECK]: (state, action) => action.deck,
  [CHANGE_CARD_AMOUNT]: (state, action) => {
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

const type = createReducer(werewolfService.mode.NORMAL, {
  [SET_GAME_TYPE]: (state, action) => action.gameType,
});

export default combineReducers({
  players,
  deck,
  selectedDeck,
  type,
});
