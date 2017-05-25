import { combineReducers } from 'redux';

const players = (state = 5, action) =>  {
    switch(action.type) {
        case 'SET_PLAYERS':
            return action.players;
        default:
            return state;
    }
}

const currentDeck = (state = '', action) => {
    switch(action.type) {
        case 'SET_CURRENT_DECK':
            return action.currentDeck;
        default:
            return state;
    }
}

const currentCards = (state = [], action) => {
    switch(action.type) {
        case 'SET_CURRENT_DECK':
            return action.currentCards;
        default:
            return state;
    }
}


export default combineReducers({ 
    players, 
    currentDeck
});