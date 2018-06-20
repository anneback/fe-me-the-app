import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Country } from '../';

export class CountriesList extends Component {
  componentDidMount() {
    this.props.fetchCountries();
  }
  render() {
    const { countries } = this.props;
    return (
      <ul>
        {countries.map(country => (
          <li key={country.alpha2Code}>
            <Country country={country} />
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries.countries
  };
};

const mapDispatchToProps = {
  fetchCountries: actions.fetchCountries
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesList);
