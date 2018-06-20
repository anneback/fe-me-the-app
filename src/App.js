import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import './App.css';

import { Page, Menu, LandingPage, CountriesList, Country } from './components';

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
      <BrowserRouter>
        <Page>
          <div className="container">
            <Menu />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route
                exact
                path="/countries"
                render={() => <CountriesList countries={countries} />}
              />
              <Route
                path="country/:name"
                render={({ match }) => <Country country={match.params.name} />}
              />
            </Switch>
          </div>
        </Page>
      </BrowserRouter>
    );
  }
}

export default App;
