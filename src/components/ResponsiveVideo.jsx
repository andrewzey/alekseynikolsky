import React from 'react';
import PropTypes from 'prop-types';

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
  return (parseInt(height, 10) / parseInt(width, 10)) * 100;
}

const ResponsiveVideo = ({ src, width, height }) => {
  const style = {
    position: 'relative',
    paddingBottom: `${getRatio(width, height)}%`,
    overflow: 'hidden',
    maxWidth: '100%',
    height: 'auto',
  };
  return (
    <div style={style}>
      <iframe
        src={src}
        width={width}
        height={height}
        frameBorder={0}
        title="responsive-video"
        allowFullScreen
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      ></iframe>
    </div>
  );
};

ResponsiveVideo.propTypes = propTypes;
ResponsiveVideo.defaultProps = defaultProps;

export default ResponsiveVideo;
