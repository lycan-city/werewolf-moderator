import {
    SET_CURRENT_GAME,
    SET_SCRIPT_LANGUAGE,
} from '../actions/types';
import createReducer from '../lib/createReducer';

export default createReducer(null, {
  [SET_CURRENT_GAME]: (state, action) => action.game,
  [SET_SCRIPT_LANGUAGE]: (state, action) => ({
    ...state,
    script: action.script,
  }),
});
