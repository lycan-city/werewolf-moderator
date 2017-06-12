import { combineReducers } from 'redux';
import { PRELOAD_DEFAULT_DATA } from '../actions/types';
import createReducer from '../lib/createReducer';


const decks = createReducer([], {
  [PRELOAD_DEFAULT_DATA]: (state, action) => action.decks,
});

const cards = createReducer([], {
  [PRELOAD_DEFAULT_DATA]: (state, action) => action.cards,
});

const translations = createReducer({}, {
  [PRELOAD_DEFAULT_DATA]: (state, action) => action.translations,
});

export default combineReducers({
  decks,
  cards,
  translations,
});
