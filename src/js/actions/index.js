import * as gameCreationActions from './gameCreation';
import * as navigationActions from './navigation';
import * as accesibilityActions from './accesibility';
import * as preferencesAction from './preferences';

export const gameCreation = gameCreationActions;
export const navigation = navigationActions;
export const accesibility = accesibilityActions;
export const preferences = preferencesAction;

export default Object.assign({},
  gameCreationActions,
  navigationActions,
  accesibilityActions,
  preferencesAction,
);
