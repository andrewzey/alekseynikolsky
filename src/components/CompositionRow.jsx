import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import React from 'react';
import {Box, Flex} from 'rebass';
import {IMAGE_HEIGHT_WIDTH_RATIO_COMPOSITION_IMAGE} from '../constants';
import AudioPlayer from './AudioPlayer/AudioPlayer';
import Button from './Button';
import {Heading5, Par} from './common';
import ResponsiveImage from './ResponsiveImage';
import ResponsiveVideo from './ResponsiveVideo';
import TruncatedText from './TruncatedText';

const Wrapper = styled.div({
  paddingBottom: "1rem",
  borderBottom: "1px solid #ccc",
  marginBottom: "1rem",
});

const Title = styled(Heading5)({
  fontSize: '1.25rem',
});

const Year = styled.span({});

const SubTitle = styled(Par)({
  fontStyle: 'italic',
});

const Description = styled.div({
  paddingTop: '1rem',
});

export default class CompositionRow extends React.Component {
  static propTypes = {
    mediaType: PropTypes.oneOf(['audio', 'video', 'score']).isRequired,
    mediaUrl: PropTypes.string,
    mediaDisplayName: PropTypes.string,
    imgUrl: PropTypes.string,
    imgAltText: PropTypes.string,
    pieceTitle: PropTypes.string.isRequired,
    pieceYear: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    pieceSubtitles: PropTypes.arrayOf(PropTypes.string).isRequired,
    pieceDescription: PropTypes.string.isRequired,
  };

  render() {
    const {
      mediaType,
      mediaUrl,
      mediaDisplayName,
      imgUrl,
      imgAltText,
      pieceTitle,
      pieceYear,
      pieceSubtitles,
      pieceDescription,
    } = this.props;

    const pieceSubtitleParagraphs = pieceSubtitles.map((subtitle, index) => (
      <SubTitle key={index}>{subtitle}</SubTitle>
    ));

    let media = null;
    if (mediaType === 'audio') {
      media = (
        <React.Fragment>
          <ResponsiveImage
            src={imgUrl}
            alt={imgAltText}
            heightWidthRatio={IMAGE_HEIGHT_WIDTH_RATIO_COMPOSITION_IMAGE}
          />
          <AudioPlayer
            mediaUrl={mediaUrl}
            mediaDisplayName={mediaDisplayName}
          />
        </React.Fragment>
      );
    }

    if (mediaType === 'video') {
      media = (
        <ResponsiveVideo src={mediaUrl} />
      );
    }

    if (mediaType === 'score') {
      const downloadFile = () => {
        window.open(mediaUrl);
      };

      media = (
        <React.Fragment>
          <ResponsiveImage
            src={imgUrl}
            alt={imgAltText}
            heightWidthRatio={IMAGE_HEIGHT_WIDTH_RATIO_COMPOSITION_IMAGE}
          />
          <Button
            style={{marginTop: '6px'}}
            color="blue"
            onClick={downloadFile}
          >Download PDF</Button>
        </React.Fragment>
      );
    }

    return (
      <Wrapper>
        <Flex flexWrap="wrap" justifyContent="center">
          <Box width={[12 / 12, 5 / 12, 5 / 12]} padding={2}>
            {media}
          </Box>
          <Box width={[12 / 12, 7 / 12, 7 / 12]} padding={2}>
            <Title>
              {pieceTitle}{pieceYear ? <>&nbsp;-&nbsp;
            <Year>{pieceYear}</Year></> : null}
            </Title>
            {pieceSubtitleParagraphs}
            <Description>
              <TruncatedText
                length={500}
                text={pieceDescription}
                expandable
              />
            </Description>
          </Box>
        </Flex>
      </Wrapper>
    );
  }
}
