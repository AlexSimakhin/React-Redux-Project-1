import React, { useState } from 'react';
import { Filter } from './components/filter';
import { Head } from './components/head';
import { Weather } from './components/weather';
import { useForecast } from './hooks/useForecast';
import { useFilter } from './hooks/useFilter';

export const Forecast = () => {
  const [currentActive, setActive] = useState(0);
  const { valueFilter, setFilter } = useFilter();
  const { isFetching, data, error } = useForecast(valueFilter);
  

  if (error && error.status === 404) {
    return <p className="message">Страница не найдена</p>;
  }

  if (error && error.status !== 404) {
    return <p className="message">Что-то пошло не так</p>;
  }

  const spinnerJSX = isFetching && (
    <div className="pswp__preloader__icn">
      <div className="pswp__preloader__cut">
        <div className="pswp__preloader__donut"></div>
      </div>
    </div>
  );

  const emptyDataJSX = !isFetching && data && data.length === 0 && (
    <p className="message">По данному запросу нет данных</p>
  );


  const weatherJSX = !isFetching && data && data.length && (
    <>
      <Head data={data} isFetching={isFetching} currentActive={currentActive} />
      <Weather data={data} isFetching={isFetching} currentActive={currentActive} setActive={setActive} />
    </>
  );

  return (
    <>
      {spinnerJSX}
      <Filter setFilter={setFilter} setActive={setActive}/>
      {weatherJSX ? weatherJSX : emptyDataJSX}
    </>
  );
};