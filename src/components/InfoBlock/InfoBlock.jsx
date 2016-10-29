import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Box } from 'reflexbox';

import './InfoBlock.css';

import { IMAGE_HEIGHT_WIDTH_RATIO_INFO_BLOCK } from '../../constants';

import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

const baseClass = 'InfoBlock';

const propTypes = {
  title: PropTypes.string,
  pageUrl: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAltText: PropTypes.string,
};

const InfoBlock = ({ title, pageUrl, handleSectionClick,
  description, imageUrl, imageAltText }) => {
  return (
    <Box col={12} sm={12} md={4} p={2} className={baseClass}>
      <Link to={pageUrl} onClick={() => window.scrollTo(0, 0)}>
        <ResponsiveImage
          src={imageUrl}
          alt={imageAltText}
          className={`${baseClass}__img`}
          heightWidthRatio={IMAGE_HEIGHT_WIDTH_RATIO_INFO_BLOCK}
        />
        <h3>{title}</h3>
      </Link>
      <p>{description}</p>
    </Box>
  );
};

InfoBlock.propTypes = propTypes;

export default InfoBlock;