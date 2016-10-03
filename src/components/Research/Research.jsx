import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Flex, Box } from 'reflexbox';

import './Research.css';

import ResearchPaperSection from '../ResearchPaperSection/ResearchPaperSection';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import HeroOverlay from '../HeroOverlay/HeroOverlay';
import HeroImage from '../../images/research-hero.jpg'
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
          <ResponsiveImage src={HeroImage} alt="Library filled with Books" />
          <HeroOverlay type="research">
            <h3>Research</h3>
            <p>The area of research that immediately contributes to my work is in developmental epistemology of music, emotion in music, perception of tonal organization in music, musical synesthesia, and perception of rhythm, meter, and tempo.</p>
            <p>However, I have always been interested in laying out a comprehensive theory of general music semiotics, similar to "general linguistics" by Ferdinand de Saussure, that would integrate the data coming from history of Western music, comparative ethnomusicology, sociology of music, and cognitive sciences, in order to establish such features of communication that are typical for all types of music.</p>
            <p>More recently, I started looking into the issue of globalization of music and the current state of music industry. This led me to the investigation of the histor of popular music, history of folk music, and history od development of the music market.</p>
            <p>TODO: GET SHORTER VERSION FROM ALEKSEY</p>
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
