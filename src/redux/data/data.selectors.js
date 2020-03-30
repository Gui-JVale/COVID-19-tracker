import { createSelector } from 'reselect';
 
const selectData = state => state.data;

export const selectInitialData = createSelector(
  [selectData],
  data => (data.initialData ? data.initialData : [])
);

export const selectSortedData = createSelector(
  [selectData],
  data => (data.sortedData ? data.sortedData : [])
)

export const selectTotalNumbers = createSelector(
  [selectData],
  data => (data.totalNumbers ? data.totalNumbers : [])
);

export const selectIsDataFetching = createSelector(
  [selectData],
  data => data.isFetching
);