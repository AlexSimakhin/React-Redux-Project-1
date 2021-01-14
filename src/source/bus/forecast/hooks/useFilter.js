import { useState } from 'react';

export const useFilter = () => {
  const [valueFilter, setFilter] = useState(null);

  return {
    valueFilter,
    setFilter,
  }
};