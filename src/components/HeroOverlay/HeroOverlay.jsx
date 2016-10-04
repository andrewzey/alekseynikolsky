import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './HeroOverlay.css';

const baseClass = 'HeroOverlay';

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  type: PropTypes.oneOf(['research', 'credo']),
};

const HeroOverlay = ({ children, type }) => {
  return (
    <div className={classNames(baseClass, `${baseClass}__${type}`)}>
      {children}
    </div>
  );
};

HeroOverlay.propTypes = propTypes;

export default HeroOverlay;