import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Flex, Box } from 'reflexbox';

import './Research.css';

import { IMAGE_HEIGHT_WIDTH_RATIO_HERO } from '../../constants';

import ResearchPaperSection from '../ResearchPaperSection/ResearchPaperSection';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import HeroOverlay from '../HeroOverlay/HeroOverlay';
import HeroImage from '../../images/research/research-hero.jpg'
import ResearchPapers from './ResearchPapers.json';

const propTypes = {
  pathname: PropTypes.string,
}

const Research = ({ pathname }) => {
  const ResearchPaperSections = ResearchPapers.map((paper, index) => {
    return <ResearchPaperSection {...paper} key={index} />
  });

  return (
    <div>
      <DocumentTitle title='Aleksey Nikolsky - Research'></DocumentTitle>
      <Flex wrap justify="center">
        <Box col={12} sm={12} p={2} style={{position: 'relative'}}>
          <ResponsiveImage
            src={HeroImage}
            alt="Library filled with Books"
            heightWidthRatio={IMAGE_HEIGHT_WIDTH_RATIO_HERO}
          />
          <HeroOverlay type="research">
            <h3>Research</h3>
            <p>My work is focused on the areas of developmental epistemology of music, emotion, perception of tonal organization, musical synesthesia, and prosody. However, I have always been interested in laying out a comprehensive theory of general music semiotics, similar to “general linguistics” by Ferdinand de Saussure, which would apply to all forms of music.</p>
            <p>More recently, my attention has gone into investigating the history of popular music, history of so-called “folk music,” and history of development of the music market. I sought to understand whether the state of music today is an aberration of biomusicological “norm” or an organic historical development that only seems to decline in its capacity to communicate information from creator of music to its listener.</p>
            <p>It was in 2013, that I decided to start publishing some of my findings and solicitingcritical review. I believe that the integration of many disciplines will reveal the formative role that music has played in the cognitive development of humanity.</p>
          </HeroOverlay>
        </Box>
        <Box col={12} sm={12} p={2}>
          {ResearchPaperSections}
        </Box>
      </Flex>
    </div>
  );
};

Research.propTypes = propTypes;

export default Research;
