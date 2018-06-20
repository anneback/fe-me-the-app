import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { CountriesList } from './components/countries-list';

const countries = [
  {
    currencies: [
      {
        code: 'USD',
        name: 'United States dollar',
        symbol: '$'
      }
    ],
    flag: 'https://restcountries.eu/data/mhl.svg',
    name: 'Marshall Islands',
    alpha2Code: 'MH',
    capital: 'Majuro'
  },
  {
    currencies: [
      {
        code: 'XPF',
        name: 'CFP franc',
        symbol: 'Fr'
      }
    ],
    flag: 'https://restcountries.eu/data/wlf.svg',
    name: 'Wallis and Futuna',
    alpha2Code: 'WF',
    capital: 'Mata-Utu'
  },
  {
    currencies: [
      {
        code: 'SEK',
        name: 'Swedish krona',
        symbol: 'kr'
      }
    ],
    flag: 'https://restcountries.eu/data/swe.svg',
    name: 'Sweden',
    alpha2Code: 'SE',
    capital: 'Stockholm'
  }
];

class App extends Component {
  render() {
    return (
      <div className="container">
        <CountriesList countries={countries} />
      </div>
    );
  }
}

export default App;
