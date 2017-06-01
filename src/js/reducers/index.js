import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux';

import gameSetup from './gameSetup';
import defaultData from './defaultData';
import game from './game';

export default combineReducers({ 
    gameSetup,
    defaultData,
    game, 
    router: routerReducer,
});
