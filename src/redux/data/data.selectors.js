import { createSelector } from 'reselect';
 
const selectData = state => state.data;

export const selectInitialData = createSelector(
  [selectData],
  data => (data ? data.initialData : null)
);

export const selectSortedData = createSelector(
  [selectData],
  data => (data ? data.sortedData : null)
)

export const selectTotalNumbers = createSelector(
  [selectData],
  data => (data ? data.totalNumbers : null)
);

export const selectLoadingState = createSelector(
  [selectData],
  data => data.isLoading
);