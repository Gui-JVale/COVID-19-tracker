import { TimeActionTypes } from './time.types';
import { getDate } from './time.utils';

const INITIA_STATE = {
  currentDate: getDate(new Date(), false),
  yesterdayDate: getDate(new Date(), true)
}

const timeReducer = (state = INITIA_STATE, action) => {
  switch(action.type) {
    case TimeActionTypes.GET_CURRENT_DATE:
      return {...state, currentDate: getDate(new Date())}
    default:
      return state;
  }

}

export default timeReducer;