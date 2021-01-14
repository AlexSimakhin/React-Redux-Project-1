import React from 'react';

import { DayForecast } from '../../elements/dayForecast';

export const Weather = ({ data, isFetching, currentActive, setActive }) => {

  const listJSX = !isFetching && data && data.length && data.map((weather, index) => {
    return <DayForecast key={String(weather.day)} data={weather} index={index} currentActive={currentActive} setActive={setActive} />
  });

  return (
    <>
      <div className="forecast">
        {listJSX}
      </div>
    </>
  );
};
