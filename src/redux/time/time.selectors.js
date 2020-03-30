import { createSelector } from 'reselect';

const selectTime = state => state.time;

export const selectCurrentDate= createSelector(
  [selectTime],
  time => time.currentDate
)

export const selectYesterdayDate = createSelector(
  [selectTime],
  time => time.yesterdayDate
)