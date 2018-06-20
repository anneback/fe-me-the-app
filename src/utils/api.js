const BASE_URL = 'https://restcountries.eu/rest';

const fetchJson = url => fetch(url).then(res => res.json());
export const api = {
  getCountries: () => fetchJson(`${BASE_URL}/v2/all`),
  getCountryOnName: name => fetchJson(`${BASE_URL}/v2/name/${name}`),
  getCountryOnCountryCode: countryCode =>
    fetchJson(`${BASE_URL}/v2/alpha/${countryCode}`)
};

/*const BASE_URL = 'https://restcountries.eu/rest';
const fetchJson = (url, options) => fetch(url, options).then(res => res.json());
const stringifyErr = err => err.toString();
export const reduxFetch = store => next => action => {
  if (!action.fetch) {
    next(action);
    return;
  }
  next({
    type: `${action.type} / start`,
    params: action.params
  });
  return fetchJson(BASE_URL + action.fetch.url, action.fetch.options)
    .then(res => {
      next({
        type: `${action.type} / success`,
        payload: res,
        params: action.params
      });
      return { res };
    })
    .catch(err => {
      next({
        type: `${action.type} / fail`,
        payload: stringifyErr(err),
        params: action.params
      });
      return { err };
    });
};*/
