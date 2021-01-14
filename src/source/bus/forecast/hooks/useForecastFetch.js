// React
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {forecastActions} from '../actions';

export const useForecastFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(forecastActions.fetchAsync());
  }, [dispatch]);

  const { data, isFetching, error } = useSelector((state) => state.forecast);

  return { data, isFetching, error }
};