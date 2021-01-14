import React from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useHead } from './useHead';

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
};

export const Head = ({ data, isFetching, currentActive }) => {
  const { currentHeadValue } = useHead({ data, isFetching, currentActive });
  const { day, type, temperature, rain_probability, humidity } = currentHeadValue;

  const date = new Date(day);

  const headJSX = !isFetching && data && data.length && (
    <>
      <div className="head" key={day}>
        <div className={`icon ${type}`}></div>
        <div className="current-date">
          <p>{capitalize(format(date, 'eeee', { locale: ru }))}</p>
            <span>{format(date, 'd MMMM', { locale: ru })}</span>
        </div>
      </div>
      <div className="current-weather">
        <p className="temperature">{temperature}</p>
        <p className="meta">
          <span className="rainy">{rain_probability}%</span>
          <span className="humidity">{humidity}%</span>
        </p>
      </div>
    </>
  );
  
  return (
    <>
      {headJSX}
    </>
  );
};