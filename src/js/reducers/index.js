import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux';

import gameSetup from './gameSetup';
import defaultData from './defaultData';
import currentGame from './currentGame';

export default combineReducers({ 
    gameSetup,
    defaultData,
    currentGame, 
    router: routerReducer,
});
