import * as gameCreationActions from './gameCreation';
import * as navigationActions from './navigation';
import * as accesibilityActions from './accesibility';

export const gameCreation = gameCreationActions;
export const navigation = navigationActions;
export const accesibility = accesibilityActions;

export default Object.assign({}, gameCreationActions, navigationActions, accesibilityActions);
