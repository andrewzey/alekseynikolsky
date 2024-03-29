import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import {Helmet} from 'react-helmet';
import {Box, Flex} from 'rebass';
import {IMAGE_HEIGHT_WIDTH_RATIO_HERO} from '../../constants';
import HeroImage from '../../images/research/research-hero.jpg';
import HeroOverlay, {HeroOverlayPar, HeroOverlayTitle, HERO_OVERLAY_TYPES} from '../HeroOverlay';
import ResponsiveImage from '../ResponsiveImage';
import ResearchItemsAcademic from './ResearchItemsAcademic.json';
import ResearchItemsPopular from './ResearchItemsPopular.json';
import {Heading2, Heading5, Heading6, Par} from '../common';
import {BODY_TEXT_STYLE} from '../../styles';
import Dropdown from 'react-dropdown';

import 'react-dropdown/style.css';
import './Research.css'; // required for stupid dropdown style

const StyledBox = styled(Box)({
  position: 'relative',
});

const StyledDropdown = styled(Dropdown)({
  float: 'right',
  minWidth: 190,
  marginBottom: 20,

  fontSize: '1rem',
  ...BODY_TEXT_STYLE,
});

const SectionHeading = styled(Heading2)({
  fontSize: '1.75rem',
  textAlign: 'left',
  marginTop: '2rem',
  marginBottom: '2rem',
});

const ResearchItem = styled.div({
  display: 'block',
  marginBottom: '2rem',
  clear: 'both',
  overflow: 'hidden',
  overflowWrap: 'break-word',
  wordWrap: 'break-word',
  hyphens: 'auto',
});

const ResearchItemThumbnail = styled.img({
  position: 'relative',
  float: 'left',
  width: '125px',
  height: '125px',
  marginRight: '12px',
});

const ResearchItemSection = ({title, year, format, url, imageUrl, imageAltText, description}) => {
  return <ResearchItem>
    <a
      href={url}
      target="_blank"
      rel='noreferrer noopener'
    >
      <ResearchItemThumbnail
        src={imageUrl}
        alt={imageAltText}
      />
    <Heading5>{title}</Heading5>
    </a>
    <Heading6>{year} - {format}</Heading6>
    <Par>{description}</Par>
  </ResearchItem>
};

ResearchItemSection.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  format: PropTypes.string,
  url: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAltText: PropTypes.string,
  description: PropTypes.string,
};

const SHOW_ALL = 'All';

export default class Research extends React.Component {
  state = {
    formatFilter: SHOW_ALL,
  };

  onSelectFilter = (filter) => {
    this.setState({formatFilter: filter.value});
  };

  renderPopularPapers() {
    const data = ResearchItemsPopular
      .filter(paper => this.state.formatFilter === SHOW_ALL || paper.format === this.state.formatFilter);
    if (!data.length) {
      return null;
    }

    return <>
      <SectionHeading style={{textAlign: 'left'}}>Popular Works</SectionHeading>
      {data.map((paper, index) => {
        return <ResearchItemSection {...paper} key={index} />
      })}
    </>
  }


  renderAcademicPapers() {
    const data = ResearchItemsAcademic
      .filter(paper => this.state.formatFilter === SHOW_ALL || paper.format === this.state.formatFilter);
    if (!data.length) {
      return null;
    }

    return <>
      <SectionHeading style={{textAlign: 'left'}}>Academic Works</SectionHeading>
      {data.map((paper, index) => {
        return <ResearchItemSection {...paper} key={index} />
      })}
    </>
  }


  render() {
    const options = [
      SHOW_ALL,
      ...Array.from(
        new Set([
          ...ResearchItemsPopular.map((paper) => paper.format),
          ...ResearchItemsAcademic.map((paper) => paper.format),
        ])
      )
    ].sort();

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
              <HeroOverlayPar style={{fontSize: '0.85rem'}}>My work is focused on the areas of developmental epistemology of music, musical emotions, perception of tonal organization, evolution of music, timbre-oriented forms of music, musical synesthesia, and prosody of music. However, I have always been interested in laying out a comprehensive theory of general music semiotics (similar to the “general linguistics” of Ferdinand de Saussure) that would apply to all forms of music.</HeroOverlayPar>
              <HeroOverlayPar style={{fontSize: '0.85rem'}}>More recently my attention has gone into investigating the history of popular music, history of “folk music,” and history of development of the music market. I have sought out to understand whether the state of music today is an aberration from a biomusicological “norm” or that it is an organic historic development that has resulted in the decline of the capacity of music creators to transmit information to listeners.</HeroOverlayPar>
              <HeroOverlayPar style={{fontSize: '0.85rem'}}>It was in 2013 that I decided to start publishing some of my findings. I believe that integration of many disciplines: psychoacoustics, neuroscience, comparative ethnomusicology, anthropology, ethology, theory of information, history, sociology, music theory and composition, performance practice, methodology of teaching music, and organology – will reveal the role of music in human life and in cultural evolution.</HeroOverlayPar>
            </HeroOverlay>
          </StyledBox>
          <Box width={[12/12, 12/12, 12/12]} padding={2}>
            <div style={{height: 20}}>
              <StyledDropdown
                options={options}
                onChange={this.onSelectFilter}
                value={this.state.formatFilter}
                placeholder="Select an option"
                controlClassName=".Dropdown-control"
                menuClassName=".Dropdown-menu"
              />
            </div>
              {this.renderAcademicPapers()}
              {this.renderPopularPapers()}
          </Box>
        </Flex>
      </React.Fragment>
    );
  }
}
