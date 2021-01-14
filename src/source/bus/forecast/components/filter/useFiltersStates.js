import { useState, useEffect } from 'react';

export const useFiltersStates = (setFilter, setActive) => {
  const [filterValue, setFilterValue] = useState(null);
  const [checkedValue, setCheckedValue] = useState(-1);
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  useEffect(() => {
    setFilter(filterValue);
  });

  const _setCheckedValue = (value) => {
    if (!filterValue) { setCheckedValue(value) }
  }

  const _setTemperatureValue = (e) => {
    let target = e.target;

    if (!target) return;

    const targetValue = e.target.value;
    
    if (target.id === 'min-temperature') {
      if (targetValue >= -100 && targetValue <= 100 && targetValue) {
        setMinValue(e.target.value);
      }
    }
    if (target.id === 'max-temperature') {
      if (targetValue >= -100 && targetValue <= 100 && targetValue) {
        setMaxValue(e.target.value)
      }
    }
  };

  const _onclickSetFilter = () => {
    if (filterValue) {
      _clearFilter();
      return;
    }

    let filter = {};

    if (checkedValue === 0) {
      filter.check = 'cloudy';
    } else if (checkedValue === 1) {
      filter.check = 'sunny';
    }

    if (minValue) {
      filter.min = minValue;
    }

    if (maxValue) {
      filter.max = maxValue;
    }

    setFilterValue(filter);
  };

  const _clearFilter = () => {
    setFilterValue(null);
    setCheckedValue(-1);
    setMinValue('');
    setMaxValue('');
    setActive(0);
  };

  return {filterValue, checkedValue, _setCheckedValue, minValue, maxValue, _onclickSetFilter, _setTemperatureValue};
};