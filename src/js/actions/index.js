import * as gameCreationActions from './gameCreation';
import * as navigationActions from './navigation';

export const gameCreation = gameCreationActions;
export const navigation = navigationActions;

export default Object.assign({}, gameCreationActions, navigationActions);
