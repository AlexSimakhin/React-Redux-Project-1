import {root} from './config';

export const api = Object.freeze({
  forecast: {
    fetch: () => {
      return fetch(`${root}/forecast`, {method: "GET"})
    }
  }
});