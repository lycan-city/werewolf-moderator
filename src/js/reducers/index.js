import { combineReducers } from 'redux';
import gameSetup from './gameSetup';
import defaultData from './defaultData';
import { routerReducer } from 'react-router-redux'

export default combineReducers({ 
    gameSetup,
    defaultData,
    router: routerReducer
});