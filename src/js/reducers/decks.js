import { PRELOAD_DEFAULT_DATA } from '../actions/types';
import createReducer from '../lib/createReducer';

const decks = createReducer([], {
    [PRELOAD_DEFAULT_DATA](state, action) {
        return action.decks;
    }
});

export default decks;