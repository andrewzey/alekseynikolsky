import React, { PropTypes } from 'react';
import { Flex, Box } from 'reflexbox';

import './CompositionRow.css';

import { IMAGE_HEIGHT_WIDTH_RATIO_COMPOSITION_IMAGE } from '../../constants';

import AudioPlayer from '../AudioPlayer/AudioPlayer';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import TruncatedText from '../TruncatedText/TruncatedText';

const baseClass = 'CompositionRow';
const propTypes = {
  pieceCoverImg: PropTypes.string.isRequired,
  pieceCoverImgAltText: PropTypes.string.isRequired,
  playlist: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    displayText: PropTypes.string,
  })).isRequired,
  pieceTitle: PropTypes.string.isRequired,
  pieceYear: PropTypes.number.isRequired,
  pieceSubtitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  pieceDescription: PropTypes.string,
};

const CompositionRow = ({
  pieceCoverImg,
  pieceCoverImgAltText,
  playlist,
  pieceTitle,
  pieceYear,
  pieceSubtitles,
  pieceDescription,
}) => {
  const pieceSubtitleParagraphs = pieceSubtitles.map((subtitle, index) => (
    <p className={`${baseClass}__subtitle`} key={index}>{subtitle}</p>
  ));

  return (
    <Flex wrap justify="center" className={`${baseClass}`}>
      <Box col={12} sm={12} md={5} p={2}>
        <ResponsiveImage
          src={pieceCoverImg}
          alt={pieceCoverImgAltText}
          heightWidthRatio={IMAGE_HEIGHT_WIDTH_RATIO_COMPOSITION_IMAGE}
        />
        <AudioPlayer
          playlist={playlist}
        />
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