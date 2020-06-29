import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import {Helmet} from 'react-helmet';
import {Box, Flex} from 'rebass';
import {GA_ACTION, GA_CATEGORY, sendEvent} from '../../analytics';
import {IMAGE_HEIGHT_WIDTH_RATIO_HERO} from '../../constants';
import HeroImage from '../../images/research/research-hero.jpg';
import HeroOverlay, {HeroOverlayPar, HeroOverlayTitle, HERO_OVERLAY_TYPES} from '../HeroOverlay';
import ResponsiveImage from '../ResponsiveImage';
import ResearchPapers from './ResearchPapers.json';
import {Heading5, Par} from '../common';

function logDownload(url) {
  sendEvent({
    category: GA_CATEGORY.EXTERNAL_LINK,
    action: GA_ACTION.CLICK,
    label: url,
  });
}

const StyledBox = styled(Box)({
  position: 'relative',
});

const ResearchPaper = styled.div({
  display: 'block',
  marginBottom: '2rem',
  clear: 'both',
  overflow: 'hidden',
  overflowWrap: 'break-word',
  wordWrap: 'break-word',
  hyphens: 'auto',
});

const ResearchPaperThumbnail = styled.img({
  position: 'relative',
  float: 'left',
  width: '125px',
  height: '125px',
  marginRight: '12px',
});

const PaperUrl = styled(Par)({
  color: '#3498db',
  textDecoration: 'underline',
});

const ResearchPaperSection = ({title, paperUrl, imageUrl, imageAltText, description}) => {
  return <ResearchPaper>
    <a
      href={paperUrl}
      target="_blank"
      rel='noreferrer noopener'
      onClick={() => logDownload(paperUrl)}
    >
      <ResearchPaperThumbnail
        src={imageUrl}
        alt={imageAltText}
      />
    </a>
    <Heading5>{title}</Heading5>
    <a
      href={paperUrl}
      target="_blank"
      rel='noreferrer noopener'
      onClick={() => logDownload(paperUrl)}
    >
      <PaperUrl>{paperUrl}</PaperUrl>
    </a>
    <Par>{description}</Par>
  </ResearchPaper>
};

ResearchPaperSection.propTypes = {
  title: PropTypes.string,
  paperUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAltText: PropTypes.string,
  description: PropTypes.string,
};

export default class Research extends React.Component {
  render() {
    const researchPaperSections = ResearchPapers.map((paper, index) => {
      return <ResearchPaperSection {...paper} key={index} />
    });

    return (
      <React.Fragment>
        <Helmet>
          <title>Aleksey Nikolsky - Research</title>
        </Helmet>
        <Flex flexWrap="wrap" justifyContent="center">
          <StyledBox width={[12/12, 12/12, 12/12]} padding={2}>
            <ResponsiveImage
              src={HeroImage}
              alt="Library filled with Books"
              heightWidthRatio={IMAGE_HEIGHT_WIDTH_RATIO_HERO}
            />
            <HeroOverlay type={HERO_OVERLAY_TYPES.RESEARCH}>
              <HeroOverlayTitle>Research</HeroOverlayTitle>
              <HeroOverlayPar>My work is focused on the areas of developmental epistemology of music, emotion, perception of tonal organization, musical synesthesia, and prosody. However, I have always been interested in laying out a comprehensive theory of general music semiotics, similar to “general linguistics” by Ferdinand de Saussure, which would apply to all forms of music.</HeroOverlayPar>
              <HeroOverlayPar>More recently my attention has gone into investigating the history of popular music, history of so-called “folk music,” and history of development of the music market. I sought to understand whether the state of music today is an aberration of biomusicological “norm” or an organic historic development that only seems to decline in its capacity to communicate information from creator of music to its listener.</HeroOverlayPar>
              <HeroOverlayPar>It was in 2013 that I decided to start publishing some of my findings and soliciting critical review. I believe that integration of many disciplines will reveal the formative role that music has played in the cognitive development of humanity.</HeroOverlayPar>
            </HeroOverlay>
          </StyledBox>
          <Box width={[12/12, 12/12, 12/12]} padding={2}>
            {researchPaperSections}
          </Box>
        </Flex>
      </React.Fragment>
    );
  }
}
