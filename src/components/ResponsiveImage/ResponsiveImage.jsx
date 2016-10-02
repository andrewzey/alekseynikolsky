import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './ResponsiveImage.css';

const baseClass = 'ResponsiveImage';

const propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

const ResponsiveImage = ({ src , alt, className}) => {
  const classes = classNames(baseClass, className);
  return <img src={src} alt={alt} className={classes} />
};

ResponsiveImage.propTypes = propTypes;

export default ResponsiveImage;
