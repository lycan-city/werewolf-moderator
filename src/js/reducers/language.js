import createReducer from '../lib/createReducer';
import { SET_LANGUAGE } from '../actions/types';

export default createReducer('en', {
  [SET_LANGUAGE]: (state, action) => action.language,
});
