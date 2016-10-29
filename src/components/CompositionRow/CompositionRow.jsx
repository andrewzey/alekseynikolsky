import React, { PropTypes } from 'react';
import { Flex, Box } from 'reflexbox';

import './CompositionRow.css';

import { IMAGE_HEIGHT_WIDTH_RATIO_COMPOSITION_IMAGE } from '../../constants';

import AudioPlayer from '../AudioPlayer/AudioPlayer';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import ResponsiveVideo from '../ResponsiveVideo/ResponsiveVideo';
import TruncatedText from '../TruncatedText/TruncatedText';
import Button from '../Button/Button';

const baseClass = 'CompositionRow';
const propTypes = {
  mediaType: PropTypes.oneOf(['audio', 'video', 'score']).isRequired,
  mediaUrl: PropTypes.string,
  mediaDisplayName: PropTypes.string,
  imgUrl: PropTypes.string,
  imgAltText: PropTypes.string,
  pieceTitle: PropTypes.string.isRequired,
  pieceYear: PropTypes.number.isRequired,
  pieceSubtitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  pieceDescription: PropTypes.string.isRequired,
};

const CompositionRow = ({
  mediaType,
  mediaUrl,
  mediaDisplayName,
  imgUrl,
  imgAltText,
  pieceTitle,
  pieceYear,
  pieceSubtitles,
  pieceDescription,
}) => {
  const pieceSubtitleParagraphs = pieceSubtitles.map((subtitle, index) => (
    <p className={`${baseClass}__subtitle`} key={index}>{subtitle}</p>
  ));

  let media = null;
  if (mediaType === 'audio') {
    media = (
      <div>
        <ResponsiveImage
          src={imgUrl}
          alt={imgAltText}
          heightWidthRatio={IMAGE_HEIGHT_WIDTH_RATIO_COMPOSITION_IMAGE}
        />
        <AudioPlayer
          mediaUrl={mediaUrl}
          mediaAltText={mediaDisplayName}
        />
      </div>
    );
  }

  if (mediaType === 'video') {
    media = (
      <ResponsiveVideo src={mediaUrl} />
    );
  }

  if (mediaType === 'score') {
    media = (
      <div>
        <ResponsiveImage
          src={imgUrl}
          alt={imgAltText}
          heightWidthRatio={IMAGE_HEIGHT_WIDTH_RATIO_COMPOSITION_IMAGE}
        />
        <form style={{'marginTop': '4px'}} method="get" action={mediaUrl}>
          <Button type="submit" color="blue">Download PDF</Button>
        </form>
      </div>
    );
  }

  return (
    <Flex wrap justify="center" className={`${baseClass}`}>
      <Box col={12} sm={12} md={5} p={2}>
        {media}
      </Box>
      <Box col={12} sm={12} md={7} p={2}>
        <h5 className={`${baseClass}__title`}>
          {pieceTitle}&nbsp;-&nbsp;
          <span className={`${baseClass}__year`}>{pieceYear}</span>
        </h5>
        {pieceSubtitleParagraphs}
        <TruncatedText
          length={500}
          text={pieceDescription}
          expandable={true}
          className={`${baseClass}__description`}
        />
      </Box>
    </Flex>
  );
};

CompositionRow.propTypes = propTypes;
CompositionRow.baseClass = baseClass;

export default CompositionRow;