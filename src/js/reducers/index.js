import { combineReducers } from 'redux';
import gameSetup from './gameSetup';
import decks from './decks';

export default combineReducers({ 
    gameSetup,
    decks
});