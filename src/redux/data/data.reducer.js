import { DataActionTypes } from './data.types';
import { getFormatedTotal, sortByMostCases, searchArr } from './data.utils'

const INITIAL_STATE = {
  initialData: null,
  totalNumbers: null,
  isLoading: true
}

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case DataActionTypes.SET_INITIAL_DATA:
      return {
        ...state, 
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
        isLoading: false
      }

      case DataActionTypes.SET_LOADING_STATE:
        return {...state, isLoading: action.payload}
    
    case DataActionTypes.SEARCH_LOCATIONS:
      return {...state, sortedData: searchArr(state.initialData, action.payload)}

    default:
      return state;
  }
};

export default dataReducer;