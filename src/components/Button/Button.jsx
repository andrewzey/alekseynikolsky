import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './Button.css';

const propTypes = {
  color: PropTypes.oneOf(['blue']),
};
const baseClass = 'Button';

const Button = ({color, children, ...rest}) => {
  const classes = classNames({
    [`${baseClass}`]: true,
    [`${baseClass}--${color}`]: true,
  });
  return (
    <button className={classes} {...rest}>{children}</button>
  );
};

Button.propTypes = propTypes;
Button.baseClass = baseClass;

export default Button;
