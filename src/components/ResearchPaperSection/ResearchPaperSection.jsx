import React, { PropTypes } from 'react';

import './ResearchPaperSection.css';

import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

const baseClass = 'ResearchPaperSection';

const propTypes = {
  title: PropTypes.string,
  paperUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAltText: PropTypes.string,
  description: PropTypes.string,
};

const ResearchPaperSection = ({ title, paperUrl, imageUrl, imageAltText,
  description}) => {
  return <div className="ResearchPaperSection">
    <a href={paperUrl} target="_blank">
      <ResponsiveImage
        src={imageUrl}
        alt={imageAltText}
        className={`${baseClass}__thumbnail`}
      />
    </a>
      <h4>{title}</h4>
    <a href={paperUrl} target="_blank">
      <p className={`${baseClass}__url`}>{paperUrl}</p>
    </a>
    <p>{description}</p>
  </div>
};

ResearchPaperSection.propTypes = propTypes;

export default ResearchPaperSection;