import React from 'react';
import './styles.css';

import { api } from '../../utils';

export const Country = ({ country }) => {
  return (
    <div>
      <img width="20" src={country.flag} /> {country.name}, {country.alpha2Code}
    </div>
  );
};
