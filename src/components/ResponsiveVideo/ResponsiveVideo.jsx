import React, { PropTypes } from 'react';
import './ResponsiveVideo.css'

const baseClass = 'ResponsiveVideo';

const propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

const defaultProps = {
  src : '',
  width: 1600,
  height: 900,
};

function getRatio(width, height) {
  return ((parseInt(height, 10) / parseInt(width, 10)) * 100) + '%';
}

const ResponsiveVideo = ({ src, width, height }) => {
  const ratio = {
    position: 'relative',
    paddingBottom: getRatio(width, height),
    overflow: 'hidden',
    maxWidth: '100%',
    height: 'auto',
  };
  return (
    <div className={`${baseClass}`} style={ratio}>
      <iframe src={src} width={width} height={height} frameBorder={0} allowFullScreen></iframe>
    </div>
  );
};

ResponsiveVideo.propTypes = propTypes;
ResponsiveVideo.defaultProps = defaultProps;
ResponsiveVideo.baseClass = baseClass;

export default ResponsiveVideo;