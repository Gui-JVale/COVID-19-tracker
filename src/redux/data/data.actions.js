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
})

export const fetchDataStartAsync = currentDate => {
  return dispatch => {
    const endpoint = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${currentDate}.csv`;
    dispatch(fetchDataStart())
    fetch(endpoint) 
      .then(response => response.text())
      .then(data => {
        csv()
          .fromString(data)
          .then(jsonObj => dispatch(fetchDataSuccess(jsonObj)))
      })
      .catch(error => dispatch(fetchDataFailure(error)))
  }
}

export const searchLocations = input => ({
  type: DataActionTypes.SEARCH_LOCATIONS,
  payload: input
});
