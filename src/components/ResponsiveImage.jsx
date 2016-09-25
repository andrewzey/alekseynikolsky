import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './ResponsiveImage.css';

const baseClass = 'ResponsiveImage';

const propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

const ResponsiveImage = ({ src , alt}) => {
  const classes = classNames(baseClass);
  return <img src={src} alt={alt} className={classes} />
};

ResponsiveImage.propTypes = propTypes;

export default ResponsiveImage;
