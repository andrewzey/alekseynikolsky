import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import React from 'react';

const ImgWrapper = styled.div(props => ({
  position: 'relative',
  // @ts-ignore
  paddingBottom: `${props.heightWidthRatio}%`,
  overflow: 'hidden',
  /* This is the color of the 'slots' for images to load into */
  backgroundColor: 'white',
}));

const Img = styled.img({
  position: 'absolute',
  width: '100%',
  height: 'auto',
});

class ResponsiveImage extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    heightWidthRatio: PropTypes.string.isRequired,
  };

  render() {
    const { src, alt, heightWidthRatio } = this.props;
    return (
      // @ts-ignore
      <ImgWrapper heightWidthRatio={heightWidthRatio}>
        <Img src={src} alt={alt} />
      </ImgWrapper>
    );
  }
}

export default ResponsiveImage;
