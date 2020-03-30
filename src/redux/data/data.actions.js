import { DataActionTypes } from './data.types';
import csv from 'csvtojson';


export const fetchDataStart = () => ({
  type: DataActionTypes.FETCH_DATA_START,
});

export const fetchDataSuccess = data => ({
  type: DataActionTypes.FETCH_DATA_SUCCESS,
  payload: data
});

export const fetchDataFailure = errorMessage => ({
  type: DataActionTypes.FETCH_DATA_FAILURE,
  payload: errorMessage
});


export const searchLocations = input => ({
  type: DataActionTypes.SEARCH_LOCATIONS,
  payload: input
});
