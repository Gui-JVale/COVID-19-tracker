import { TimeActionTypes } from './time.types';

export const getCurrentDate = time => ({
  type: TimeActionTypes.GET_CURRENT_DATE,
  payload: time
});
