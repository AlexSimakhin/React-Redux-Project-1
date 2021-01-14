// Types
import {types} from './types';

const initialState = {
    data: null,
    isFetching: false,
    error: null,
};

export const forecastReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FORECAST_START_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case types.FORECAST_STOP_FETCHING:
      return {
        ...state,
        isFetching: false
      };
    case types.FORECAST_SET_FETCHING_ERROR:
      return {
        ...state,
        error: payload,
        data: null,
      };
    case types.FORECAST_FILL:
      return {
        ...state,
        data: payload,
        error: null,
      };

    default:
      return state
  }
};