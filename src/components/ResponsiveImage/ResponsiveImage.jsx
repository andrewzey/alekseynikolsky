import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './ResponsiveImage.css';

const baseClass = 'ResponsiveImage';

const propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  heightWidthRatio: PropTypes.string,
};

class ResponsiveImage extends React.Component {
  render() {
    const { src, alt, className, heightWidthRatio } = this.props;
    const classes = classNames(`${baseClass}__wrapper`, className);
    return (
      <div
        style={{
          position: 'relative',
          paddingBottom: `${heightWidthRatio}%`,
          overflow: 'hidden',
          /* This is the color of the 'slots' for images to load into */
          backgroundColor: 'white',
        }}
        className={classes}
      >
        <img
          src={src}
          alt={alt}
          className={`${baseClass}__img`}
        />
      </div>
    );
  }
}

ResponsiveImage.propTypes = propTypes;

export default ResponsiveImage;
