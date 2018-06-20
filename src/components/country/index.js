import React from 'react';
import './styles.css';

export const Country = props => (
  <div>
    {console.log('props', props)}
    <img width="20" src={props.flag} /> {props.name}, {props.alpha2Code}
  </div>
);
