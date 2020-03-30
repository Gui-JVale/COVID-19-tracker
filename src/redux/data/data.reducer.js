import { DataActionTypes } from './data.types';
import { getFormatedTotal, sortByMostCases, searchArr } from './data.utils'

const INITIAL_STATE = {
  initialData: null,
  totalNumbers: null,
  isFetching: false,
  errorMessage: '',
}

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case DataActionTypes.FETCH_DATA_START:
      return {...state, isFetching: true};

    case DataActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state, 
        isFetching: false,
        initialData: action.payload,
        sortedData: sortByMostCases(action.payload),
        totalNumbers: [
          {
            name: "Confirmed Cases",
            number: getFormatedTotal(action.payload, "Confirmed")
          },
          {
            name: "Total Recovered",
            number: getFormatedTotal(action.payload, "Recovered")
          },
          {
            name: "Total Deaths",
            number: getFormatedTotal(action.payload, "Deaths")
          }
        ],
      }

    case DataActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state, 
        isFetching: false,
        errorMessage: action.payload
      }
    
    case DataActionTypes.SEARCH_LOCATIONS:
      return {...state, sortedData: searchArr(state.initialData, action.payload)}

    default:
      return state;
  }
};

export default dataReducer;