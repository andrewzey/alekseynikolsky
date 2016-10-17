import React from 'react';
import { Match } from 'react-router';

const MatchWithCallback = ({ component:Component, callback, ...rest }) => (
  <Match {...rest} render={(matchProps) => (
    <Component {...matchProps} handleClick={(url) => callback(url)} />
  )}/>
);

export default MatchWithCallback;
