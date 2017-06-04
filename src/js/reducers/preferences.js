import { combineReducers } from 'redux';
import { filterLevels as levels } from 'werewolf-brain';
import { SET_FILTER_LEVEL } from '../actions/types';
import createReducer from '../lib/createReducer';

const filterLevel = createReducer(levels.game, {
  [SET_FILTER_LEVEL]: (state, action) => action.filterLevel,
});

export default combineReducers({
  filterLevel,
});
