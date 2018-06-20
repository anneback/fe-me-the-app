const BASE_URL = 'https://restcountries.eu/rest/v2';

const fetchJson = url => fetch(url).then(res => res.json());

export const api = {
  getCountryList: () => fetchJson(`${BASE_URL}/all`)
};
