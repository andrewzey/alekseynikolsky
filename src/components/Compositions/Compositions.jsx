import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Match, Redirect } from 'react-router';

import Navigation from '../Navigation/Navigation';
import ComingSoon from '../ComingSoon/ComingSoon';
import CompositionRow from '../CompositionRow/CompositionRow';

// Import JSON data
import CompositionsOrchestral from './CompositionsOrchestral.json';
import CompositionsChamber from './CompositionsChamber.json';
import CompositionsScores from './CompositionsScores.json';

const propTypes = {
  pathname: PropTypes.string,
};

// TODO: make it DRY!!!

const Orchestral = () => {
  const orchestralCompositions = CompositionsOrchestral.map((composition, index) => {
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
      <DocumentTitle title='Aleksey Nikolsky - Orchestral Compositions' />
      {orchestralCompositions}
    </div>
  );
};

const Chamber = () => {
  const chamberCompositions = CompositionsChamber.map((composition, index) => {
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
      <DocumentTitle title='Aleksey Nikolsky - Chamber Compositions' />
      {chamberCompositions}
    </div>
  );
};

const Scores = () => {
  const scores = CompositionsScores.map((score, index) => {
    const subtitles = score.pieceSubtitles.split('\n');
    return (
      <CompositionRow
        mediaType={score.mediaType}
        mediaUrl={score.mediaUrl}
        mediaDisplayName={`${score.pieceTitle} - ${score.pieceYear}`}
        imgUrl={score.imgUrl}
        imgAltText={score.imgAltText}
        pieceTitle={score.pieceTitle}
        pieceYear={score.pieceYear}
        pieceSubtitles={subtitles}
        pieceDescription={score.pieceDescription}
        key={index}
      />
    );
  });
  return (
    <div>
      <DocumentTitle title='Aleksey Nikolsky - Compositions - Scores' />
      {scores}
    </div>
  );
};

const Compositions = ({ pathname }) => {
  const subSections = [
    { displayName: 'Orchestral', url: 'orchestral', component: Orchestral },
    { displayName: 'Chamber', url: 'chamber', component: Chamber },
    { displayName: 'Fabulusions', url: 'fabulusions', component: ComingSoon },
    { displayName: 'Scores', url: 'scores', component: Scores },
  ];
  const subSectionComponents = subSections.map(section => (
    <Match
      pattern={section.url}
      component={section.component}
      key={section.url}
    />
  ));

  return (
    <div>
      <DocumentTitle title='Aleksey Nikolsky - Compositions' />
      <Navigation
        sections={subSections}
        pathname={pathname}
        hasBackground={true}
        bgColor="gray"
      />
      {/* TODO: Add compositions landing page and remove this */}
      <Match
        pattern="/compositions"
        exactly
        component={() => <Redirect to="/compositions/orchestral" />}
      />
      {subSectionComponents}
    </div>
  );
};

Compositions.propTypes = propTypes;

export default Compositions;
