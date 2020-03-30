import { takeEvery, put } from 'redux-saga/effects';
import csv from 'csvtojson';

import { 
  fetchDataSuccess,
  fetchDataFailure
} from './data.actions';

import { DataActionTypes } from './data.types';

export function* fetchDataAsync(param) {
  try {
    const endpoint = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-28-2020.csv`;
    const response = yield fetch(endpoint);
    const dataCSV = yield response.text();
    const dataJSON = yield csv().fromString(dataCSV);
    yield put(fetchDataSuccess(dataJSON))
  } catch(e) {
    yield put(fetchDataFailure(e))
  }
}

export function* fetchDataStart() {
  yield takeEvery(
    DataActionTypes.FETCH_DATA_START,
    fetchDataAsync
  )
}