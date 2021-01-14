import { useForecastFetch } from './useForecastFetch';

export const useForecast = (valueFilter) => {
  const { isFetching, data, error } = useForecastFetch();
  
  
  if (!valueFilter) {
    const forecastList = !isFetching && data && data.length && data.filter((weather, index) => index < 7);

    return { isFetching, data: forecastList, error };
  } else if (!!valueFilter && !isFetching) {
    const { check, min, max } = valueFilter;
    
    const forecastFilter = data.filter(weather => {
      return weather.type === check;
    });

    let count = 0;

    if (min && max) {
      if (check) {
        const forecastMinMaxFilter = forecastFilter.filter(weather => {
          return weather.temperature >= min && weather.temperature <= max && count++ < 7;
        });

        return { isFetching, data: forecastMinMaxFilter, error };
      } else {
        const forecastMinMaxFilter = data.filter(weather => {
          return weather.temperature >= min && weather.temperature <= max && count++ < 7;
        });

        return { isFetching, data: forecastMinMaxFilter, error };
      }
    }

    if (min) {
      if (check) {
        const forecastMinFilter = forecastFilter.filter(weather => {
          return weather.temperature >= min && count++ < 7;
        });

        return { isFetching, data: forecastMinFilter, error };
      } else {
        const forecastMinFilter = data.filter(weather => {
          return weather.temperature >= min && count++ < 7;
        });

        return { isFetching, data: forecastMinFilter, error };
      }
    }
    
    if (max) {
      if (check) {
        const forecastMaxFilter = forecastFilter.filter(weather => {
          return weather.temperature <= max && count++ < 7;
        });

        return { isFetching, data: forecastMaxFilter, error };
      } else {
        const forecastMaxFilter = data.filter(weather => {
          return weather.temperature <= max && count++ < 7;
        });

        return { isFetching, data: forecastMaxFilter, error };
      }
    }

    const forecastTypeFilter = !isFetching && forecastFilter && forecastFilter.length && forecastFilter.filter((weather, index) => {
      return index < 7;
    });

    return { isFetching, data: forecastTypeFilter, error };
  }

  return { isFetching, data, error };
};