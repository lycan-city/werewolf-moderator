import { combineReducers } from 'redux';
import gameSetup from './gameSetup';
import decks from './decks';
import { routerReducer } from 'react-router-redux'

export default combineReducers({ 
    gameSetup,
    decks,
    router: routerReducer
});