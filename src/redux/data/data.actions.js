import { DataActionTypes } from './data.types';

export const setInitialData = data => ({
  type: DataActionTypes.SET_INITIAL_DATA,
  payload: data
});

export const searchLocations = input => ({
  type: DataActionTypes.SEARCH_LOCATIONS,
  payload: input
});

export const setLoadingState = bool => ({
  type: DataActionTypes.SET_LOADING_STATE,
  payload: bool
});