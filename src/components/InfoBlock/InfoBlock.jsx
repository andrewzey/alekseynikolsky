import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Box } from 'reflexbox';

import './InfoBlock.css';

import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

const baseClass = 'InfoBlock';

const propTypes = {
  title: PropTypes.string,
  pageUrl: PropTypes.string,
  handleSectionClick: PropTypes.func.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAltText: PropTypes.string,
};

const defaultProps = {
  handleSectionClick: () => {},
};

const InfoBlock = ({ title, pageUrl, handleSectionClick,
  description, imageUrl, imageAltText }) => {
  return (
    <Box col={12} sm={12} md={4} p={2} className={baseClass}>
      <Link to={pageUrl} onClick={() => handleSectionClick(pageUrl)}>
        <ResponsiveImage
          src={imageUrl}
          alt={imageAltText}
          className={`${baseClass}__img`}
        />
        <h3>{title}</h3>
      </Link>
      <p>{description}</p>
    </Box>
  );
};

InfoBlock.propTypes = propTypes;
InfoBlock.defaultProps = defaultProps;

export default InfoBlock;