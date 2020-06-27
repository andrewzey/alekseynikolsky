import React from 'react';
import { Route } from 'react-router-dom';

import { logPageView } from '../analytics';

const RouteWithGA = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(matchProps) => {
    logPageView();
    return (
      <Component {...matchProps} />
    );
  }}/>
);

export default RouteWithGA;
