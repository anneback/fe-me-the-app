import React from 'react';
import { Country } from '../';
// import { api } from '../utils';

export const CountriesList = ({ countries }) => (
  <ul>
    {countries.map(country => (
      <li key={country.alpha2Code}>
        <Country
          flag={country.flag}
          name={country.name}
          alpha2Code={country.alpha2Code}
        />
      </li>
    ))}
  </ul>
);
