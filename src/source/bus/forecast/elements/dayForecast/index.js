import React from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
};

export const DayForecast = ({ data, index, currentActive, setActive }) => {
  const { day, type, temperature } = data;

  let date = format(new Date(day), 'cccc', { locale: ru });

  return (
    <div className={`day ${type} ${index === currentActive ? 'selected' : ''}`} onClick={() => setActive(index)}>
      <p>{capitalize(date)}</p>
      <span>{temperature}</span>
    </div>
  );
};