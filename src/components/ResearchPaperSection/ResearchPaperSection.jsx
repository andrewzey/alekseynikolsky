import React, { PropTypes } from 'react';
import { sendEvent, GA_CATEGORY, GA_ACTION } from '../../analytics';

import './ResearchPaperSection.css';

const baseClass = 'ResearchPaperSection';

const propTypes = {
  title: PropTypes.string,
  paperUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAltText: PropTypes.string,
  description: PropTypes.string,
};

function logScoreDownload(url) {
  sendEvent({
    category: GA_CATEGORY.EXTERNAL_LINK,
    action: GA_ACTION.CLICK,
    label: url,
  });
}

const ResearchPaperSection = ({ title, paperUrl, imageUrl, imageAltText,
  description}) => {
  return <div className="ResearchPaperSection">
    <a href={paperUrl} target="_blank" onClick={() => logScoreDownload(paperUrl)}>
      <img
        src={imageUrl}
        alt={imageAltText}
        className={`${baseClass}__thumbnail`}
      />
    </a>
      <h5>{title}</h5>
    <a href={paperUrl} target="_blank" onClick={() => logScoreDownload(paperUrl)}>
      <p className={`${baseClass}__url`}>{paperUrl}</p>
    </a>
    <p>{description}</p>
  </div>
};

ResearchPaperSection.propTypes = propTypes;

export default ResearchPaperSection;