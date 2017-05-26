import { SET_AVAILABLE_DECKS } from '../actions/types';
import createReducer from '../lib/createReducer';

const decks = createReducer([], {
    [SET_AVAILABLE_DECKS](state, action) {
        return action.decks;
    }
});

export default decks;