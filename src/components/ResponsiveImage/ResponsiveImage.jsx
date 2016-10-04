import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './ResponsiveImage.css';

const baseClass = 'ResponsiveImage';

const propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

const whitePlaceHolder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAA1BMVEX///+nxBvIAAAAC0lEQVR4AWOgKwAAAG4AAfBdB/0AAAAASUVORK5CYII=';

/*
  This component will preload a white background to the maxHeight specified
  until the specified src loads. This is to prevent layout thrashing and jank.
 */
class ResponsiveImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageLoaded: false };
  }

  componentDidMount() {
    // Preload image
    const imageToLoad = new Image();
    imageToLoad.onload = () => {
      this.setState({ imageLoaded: true });
    };
    imageToLoad.src = this.props.src;
  }

  render() {
    const { src , alt, className, maxHeight } = this.props;
    const classes = classNames(baseClass, className);
    const imgSrc = (this.state.imageLoaded) ? src : whitePlaceHolder;
    return (
      <img
        src={imgSrc}
        alt={alt}
        className={classes}
        style={{maxHeight: maxHeight}}
      />
    );
  }
}

ResponsiveImage.propTypes = propTypes;

export default ResponsiveImage;
