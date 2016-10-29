import React from 'react';
import { Match } from 'react-router';

import { logPageView } from '../../analytics';

const MatchWithGA = ({ component:Component, ...rest }) => (
  <Match {...rest} render={(matchProps) => {
    logPageView();
    return (
      <Component {...matchProps} />
    );
  }}/>
);

export default MatchWithGA;
