import { SET_FILTER_LEVEL } from './types';

export const setFilterLevel = filterLevel => ({
  type: SET_FILTER_LEVEL,
  filterLevel,
});
