import React from 'react';
import {Route} from 'react-router-dom';

const WrappedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(matchProps) => {
    return (
      <Component {...matchProps} />
    );
  }}/>
);

export default WrappedRoute;
