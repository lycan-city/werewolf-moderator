import createReducer from '../lib/createReducer';
import {
    SET_CURRENT_GAME,
} from '../actions/types';

export default createReducer(null, {
    [SET_CURRENT_GAME](state, action) {
        return action.game;
    }
});