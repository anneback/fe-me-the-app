import { combineReducers } from 'redux';

// HELPERS
const stringifyErr = err => err.toString();

const countriesDefaultState = {
  countries: [],
  isLoading: false,
  err: null
};

export const countriesReducer = (state = countriesDefaultState, action) => {
  switch (action.type) {
    case 'REQUEST_COUNTRIES_START':
      return { ...state, isLoading: true, err: null };
    case 'REQUEST_COUNTRIES_SUCCESS':
      return {
        ...state,
        countries: action.payload,
        isLoading: false,
        err: null
      };
    case 'REQUEST_COUNTRIES_FAIL':
      return {
        ...countriesDefaultState,
        isLoading: false,
        err: stringifyErr(action.payload)
      };
    default:
      return state;
  }
};

const countryDefaultState = {};

export const countryReducer = (state = countryDefaultState, action) => {
  switch (action.type) {
    case 'REQUEST_COUNTRY_START':
      return { ...state, isLoading: true, err: null };
    case 'REQUEST_COUNTRY_SUCCESS':
      return { ...state, country: action.payload, isLoading: false, err: null };
    case 'REQUEST_COUNTRY_FAIL':
      return {
        ...countryDefaultState,
        isLoading: false,
        err: stringifyErr(action.payload)
      };
    default:
      return state;
  }
};

export const dataReducer = combineReducers({
  countries: countriesReducer,
  country: countryReducer
});
