import { api } from '../utils';

// COUNTRY
const countryTypes = {
  start: 'REQUEST_COUNTRY_START',
  success: 'REQUEST_COUNTRY_SUCCESS',
  fail: 'REQUEST_COUNTRY_FAIL'
};

export const requestCountryStart = name => ({
  type: countryTypes.start,
  payload: name
});

export const requestCountrySuccess = country => ({
  type: countryTypes.success,
  payload: country
});

export const requestCountryFail = (name, err) => ({
  type: countryTypes.fail,
  payload: { name, err }
});

export const fetchCountryOnName = name => {
  return dispatch => {
    dispatch(requestCountryStart(name));
    return api
      .getCountryOnName(name)
      .then(country => {
        dispatch(requestCountrySuccess(country));
      })
      .catch(err => {
        dispatch(requestCountryFail(name, err));
      });
  };
};

// COUNTRIES
const countriesTypes = {
  start: 'REQUEST_COUNTRIES_START',
  success: 'REQUEST_COUNTRIES_SUCCESS',
  fail: 'REQUEST_COUNTRIES_FAIL'
};

export const requestCountriesStart = () => ({
  type: countriesTypes.start
});

export const requestCountriesSuccess = countries => ({
  type: countriesTypes.success,
  payload: countries
});

export const requestCountriesFail = err => ({
  type: countriesTypes.fail,
  payload: err
});

export const fetchCountries = () => {
  return dispatch => {
    dispatch(requestCountriesStart());
    return api
      .getCountries()
      .then(countries => {
        dispatch(requestCountriesSuccess(countries));
      })
      .catch(err => {
        dispatch(requestCountriesFail(err));
      });
  };
};
