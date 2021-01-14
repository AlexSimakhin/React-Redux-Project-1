import React from 'react';
import { useFiltersStates } from './useFiltersStates';

export const Filter = ({ setFilter, setActive }) => {
  const { filterValue, checkedValue, _setCheckedValue, minValue, maxValue, _onclickSetFilter, _setTemperatureValue } = useFiltersStates(setFilter, setActive);

  return (
    <div className="filter">
      <span className={`checkbox ${checkedValue === 0 ? 'selected' : ''} ${filterValue ? 'blocked' : ''}`.trim()} onClick={() => _setCheckedValue(0)}>Облачно</span>
      <span className={`checkbox ${checkedValue === 1 ? 'selected' : ''} ${filterValue ? 'blocked' : ''}`.trim()} onClick={() => _setCheckedValue(1)}>Солнечно</span>
      <p className="custom-input">
        <label htmlFor="min-temperature">Минимальная температура</label>
        <input id="min-temperature" type="number" min="-100" max="100" onChange={_setTemperatureValue} value={minValue} disabled={filterValue ? 'blocked' : ''}/>
      </p>
      <p className="custom-input">
        <label htmlFor="max-temperature">Максимальная температура</label>
        <input id="max-temperature" type="number" min="-100" max="100" onChange={_setTemperatureValue} value={maxValue} disabled={filterValue ? 'blocked' : ''}/>
      </p>
      <button onClick={_onclickSetFilter} disabled={checkedValue === -1 && !minValue && !maxValue ? true : false}>{!filterValue ? 'Отфильтровать' : 'Очистить'}</button>
    </div>
  );
};