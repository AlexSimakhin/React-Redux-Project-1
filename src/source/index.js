import './styles/index.scss';

import React from 'react';
import { Forecast } from './bus/forecast';

export const Source = () => {
  return (
    <>
      <main>
        <Forecast/>
      </main>
    </>
  );
};
