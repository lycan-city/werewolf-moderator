import { SET_AVAILABLE_DECKS } from '../actions/types';


const decks = (state = [], action) => {
    switch (action.type) {
        case SET_AVAILABLE_DECKS:
            return action.decks;
        default:
            return state;
    }
};

export default decks;