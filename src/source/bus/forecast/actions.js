import {api} from '../../api';
import {types} from './types';

export const forecastActions = Object.freeze({
  startFetching: () => {
    return { type: types.FORECAST_START_FETCHING }
  },
  stopFetching: () => {
    return { type: types.FORECAST_STOP_FETCHING }
  },
  fill: (payload) => {
    return { type: types.FORECAST_FILL, payload }
  },
  setFetchingError: (error) => {
    return {
      type: types.FORECAST_SET_FETCHING_ERROR,
      error: true,
      payload: error
    }
  },

  fetchAsync: () => async (dispatch) => {
    dispatch(forecastActions.startFetching());

    const response = await api.forecast.fetch();

    if (response.status === 200) {
      const { data } = await response.json();

      dispatch(forecastActions.fill(data));
    } else {
      const error = {
        status: response.status
      };

      dispatch(forecastActions.setFetchingError(error));
    }
    dispatch(forecastActions.stopFetching());
  }
});