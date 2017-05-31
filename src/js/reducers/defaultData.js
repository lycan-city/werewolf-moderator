import { combineReducers } from 'redux';
import { PRELOAD_DEFAULT_DATA } from '../actions/types';
import createReducer from '../lib/createReducer';


const decks = createReducer([], {
  [PRELOAD_DEFAULT_DATA]: (state, action) => action.decks,
});

const cards = createReducer([], {
  [PRELOAD_DEFAULT_DATA]: (state, action) => action.cards,
});

export default combineReducers({
  decks,
  cards,
});
