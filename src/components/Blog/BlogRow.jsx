import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import React from 'react';
import {Box, Flex} from 'rebass';
import {IMAGE_HEIGHT_WIDTH_RATIO_COMPOSITION_IMAGE} from '../../constants';

import {Heading5, Par} from '../common';
import ResponsiveImage from '../ResponsiveImage';
import TruncatedText from '../TruncatedText';

const Wrapper = styled.div({
  paddingBottom: "1rem",
  borderBottom: "1px solid #ccc",
  marginBottom: "1rem",
});

const Title = styled(Heading5)({
  fontSize: '1.25rem',
});

const SubTitle = styled(Par)({
  fontStyle: 'italic',
});

const Description = styled.div({
  paddingTop: '1rem',
});

export default class BlogRow extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string,
    imgUrl: PropTypes.string,
    imgAltText: PropTypes.string,
    slug: PropTypes.string,
    mdPath: PropTypes.string,
  };

  render() {
    const {
      title,
      date,
      author,
      imgUrl,
      imgAltText,
      slug,
      description,
    } = this.props;

    return (
      <Wrapper>
        <Flex flexWrap="wrap" justifyContent="center">
          <Box width={[12 / 12, 5 / 12, 5 / 12]} padding={2}>
            <a href={`/blog/${slug}`}>
              <ResponsiveImage
                src={imgUrl}
                alt={imgAltText}
                heightWidthRatio={IMAGE_HEIGHT_WIDTH_RATIO_COMPOSITION_IMAGE}
              />
            </a>
          </Box>
          <Box width={[12 / 12, 7 / 12, 7 / 12]} padding={2}>
            <a href={`/blog/${slug}`}>
              <Title>{title}</Title>
            </a>
            <SubTitle>by {author} on {date}</SubTitle>
            <Description>
              <TruncatedText
                length={500}
                text={description}
                expandable={false}
              />
              <a href={`/blog/${slug}`}><Par style={{marginTop: '1rem'}}>Read full article</Par></a>
            </Description>
          </Box>
        </Flex>
      </Wrapper>
    );
  }
}
