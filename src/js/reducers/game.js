import {
    SET_CURRENT_GAME,
    SET_SCRIPT_LANGUAGE,
} from '../actions/types';
import createReducer from '../lib/createReducer';

export default createReducer(null, {
  [SET_CURRENT_GAME](state, action) {
    return action.game;
  },
  [SET_SCRIPT_LANGUAGE](state, action) {
    return {
      ...state,
      script: action.script,
    };
  },
});
