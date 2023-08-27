import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import React from 'react';
import {Helmet} from 'react-helmet';
import {Switch} from 'react-router-dom';
import CompositionRow from '../CompositionRow';
import Navigation from '../Navigation';
import Route from '../Route';
import CompositionsChamber from './CompositionsChamber.json';
import CompositionFabulusions from './CompositionsFabulusions.json';
import {Heading5, Par} from '../common';
// Import JSON data
import CompositionsOrchestral from './CompositionsOrchestral.json';
import CompositionsScores from './CompositionsScores.json';
import StylisticStatement from './StylisticStatement';

const Title = styled(Heading5)({
  fontSize: '1.5rem',
});

const SubTitle = styled(Par)({
  fontStyle: 'italic',
});

const Description = styled.div({
  paddingVertical: '1rem',
  paddingBottom: '1.5rem',
});

const StyledPar = styled(Par)({
  paddingTop: '1rem',
});


const propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
};

const COMP_TYPE = {
  ORCHESTRAL: 'ORCHESTRAL',
  CHAMBER: 'CHAMBER',
  FABULUSIONS: 'FABULUSIONS',
  SCORES: 'SCORES',
};

const pageTitleByType = {
  [COMP_TYPE.ORCHESTRAL]: 'Orchestral Compositions',
  [COMP_TYPE.CHAMBER]: 'Chamber Compositions',
  [COMP_TYPE.FABULUSIONS]: 'Fabulusions for Piano',
  [COMP_TYPE.SCORES]: 'Compositions - Scores',
};

const dataByType = {
  [COMP_TYPE.ORCHESTRAL]: CompositionsOrchestral,
  [COMP_TYPE.CHAMBER]: CompositionsChamber,
  [COMP_TYPE.FABULUSIONS]: CompositionFabulusions,
  [COMP_TYPE.SCORES]: CompositionsScores,
};

const sectionDescriptionByType = {
  [COMP_TYPE.FABULUSIONS]: <div>
    <Title>Fabulusions – 2008-2021</Title>
    <SubTitle>A cycle of 13 pieces for piano solo, performed by Aleksey Nikolsky.</SubTitle>
    <StyledPar><a href="https://youtube.com/playlist?list=PLNEZJdSRfhWe_R3d36WVITyJZzlv6GHsy">https://youtube.com/playlist?list=PLNEZJdSRfhWe_R3d36WVITyJZzlv6GHsy</a></StyledPar>
    <Description>
    <StyledPar>It took a while for me to come up with an original approach to piano solo music. I took on the challenge after Denisov told me that piano music has become outdated and it's simply not possible to write for piano expressively and "pianistically" any more. This remark directed me to examine the styles of music that sound best on the piano and are comfortable to play – by Scriabin, Chopin, Rameau, and F. Couperin.</StyledPar>
    <StyledPar>I tasked myself with creating music whose expression would complement the piano and intrigue performers and listeners. Since my childhood, I have been attracted to fairy tales and story-telling. “Fairy tales” by Gretchaninov, Medtner, Bortkiewicz, Prokofiev, and Tcherepnin, as well as the mysterious symbolic style of Scriabin, Rebikov, early Bartok, Kodaly, Debussy, Caplet, Scott, and Szymanowski set the tone for my exploration and guided me in forging the new genre of “fabulusion.” At its heart, stays the notion of narration. Each piece as though is telling its own story – vague and elusive, hard to express in words, yet distinct in its emotional disposition and carrying deep symbolic meaning. The root “fabula” comes handy in referring to a fantastic plot that receives artistic treatment as the story unveils. Another Latin root “ludere” – “to play” – reflects another important aspect of fabulusions: they theatrically play characters against each other, sometimes with an unpredictable outcome. Many of my fabulusions, I started without knowing how they would end – figuring this out as the composition was materializing.</StyledPar>
    <StyledPar>I chose not to spell out the exact program for each of the pieces, since what matters there is not a specific happening but the “atmosphere” of a fabula – general character of the engaged actors and actions. I left only 3 sources to connote the expressive content of each work and its dramatic development: the programmatic title, the character marks in Italian that accompany every significant change in the music, and citations of well-known compositions, often camouflaged or grotesquely transformed to subliminally suggest certain imagery or emotional disposition to the listener and performer – as though in a dream or a vague recollection.</StyledPar>
    <StyledPar>Throughout the 2003-2009 I experimented a lot with the piano before coming up with the idea of connecting Schnittke's polystylistic technique of quotations of pre-existing music, Asafyev's theory of expressing through musical intonation, the surrealist aesthetics of phantasmagoric combination of vivid images, Chopin's melody-driven texture (as in his concertos), Scriabin's concept of “total harmony” (the idea of deriving harmony and melody from a single source of a moderately dissonant "thematic chord"), and melodic embellishments alla French Baroque (and its foreign appropriations, as in Purcell, Telemann and CPE Bach). This bizarre bouquet is not as crazy as it appears at the first glance.</StyledPar>
    <StyledPar>Surrealism alla Bunuel, Dali, Lorca, Harms and Vvedensky is based on the idea of materializing the dreamworld of realistic experiences as a reality of higher order - what they termed "hyper-realism". Schnittke invented a totalitarian quotation technique, when almost the entire composition is based on dozens of citations from various famous compositions - each bringing in its own connotations and associations. This combines quite well with the surrealist approach. Asafyev developed a theory of how a melodic motif carries a range of conventional semantic values within a given music culture. This enables the "reverse-engineering" approach to composition, where I can pick a suitable famous theme for a desired expression and modify it to match the context of my composition.</StyledPar>
      <StyledPar>Melody-centered texture enables building an entire composition on the semantic interplay between various source-motifs. The congruent melody and harmony ("melodized chord" = "harmonized melody") provides the integrity of the music form. And embellishments and heterophonic layering of melody and accompaniment diversify the music and enable the building of large-scale forms.</StyledPar></Description>
  </div>
};

function CompositionSectionFactory(type) {
  const title = pageTitleByType[type];
  const data = dataByType[type];
  let sectionDescription = sectionDescriptionByType[type] || null;

  return function CompositionSection() {
    const compositions = data.map((composition, index) => {
      const subtitles = composition.pieceSubtitles.split('\n');
      return (
        <CompositionRow
          mediaType={composition.mediaType}
          mediaUrl={composition.mediaUrl}
          mediaDisplayName={`${composition.pieceTitle} - ${composition.pieceYear}`}
          imgUrl={composition.imgUrl}
          imgAltText={composition.imgAltText}
          pieceTitle={composition.pieceTitle}
          pieceYear={composition.pieceYear}
          pieceSubtitles={subtitles}
          pieceDescription={composition.pieceDescription}
          key={index}
        />
      );
    });
    return (
      <div>
        <Helmet>
          <title>{`Aleksey Nikolsky - ${title}`}</title>
        </Helmet>
        {sectionDescription}
        {compositions}
      </div>
    );
  }
}

export default function Compositions(props) {
  const path = '/compositions';
  const subSections = [
    {displayName: 'Orchestral', path: `${path}/orchestral`, component: CompositionSectionFactory(COMP_TYPE.ORCHESTRAL) },
    {displayName: 'Chamber', path: `${path}/chamber`, component: CompositionSectionFactory(COMP_TYPE.CHAMBER) },
    {displayName: 'Fabulusions', path: `${path}/fabulusions`, component: CompositionSectionFactory(COMP_TYPE.FABULUSIONS) },
    {displayName: 'Scores', path: `${path}/scores`, component: CompositionSectionFactory(COMP_TYPE.SCORES) },
  ];
  const subSectionComponents = subSections.map(section => (
    <Route
      exact
      path={section.path}
      component={section.component}
      key={section.path}
    />
  ));

  return (
    <div>
      <Helmet>
        <title>Aleksey Nikolsky - Compositions</title>
      </Helmet>
      <Navigation
        sections={subSections}
        location={props.location}
        hasBackground={true}
        bgColor="gray"
      />
      <Switch>
        <Route
          exact
          path="/compositions"
          component={StylisticStatement}
        />
        {subSectionComponents}
      </Switch>
    </div>
  );
};
Compositions.propTypes = propTypes;
