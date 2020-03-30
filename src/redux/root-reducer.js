import { combineReducers } from 'redux';

import dataReducer from './data/data.reducer';
import timeReducer from './time/time.reducer';

export default combineReducers({
  data: dataReducer,
  time: timeReducer
})