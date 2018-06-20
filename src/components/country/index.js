import React from 'react';

export const Country = props => (
  <div>
    {console.log('props', props)}
    {props.flag}, {props.alpha2Code}
  </div>
);
