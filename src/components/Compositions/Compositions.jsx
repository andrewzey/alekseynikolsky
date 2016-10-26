import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import MatchWithCallback from '../MatchWithCallback/MatchWithCallback';

import Navigation from '../Navigation/Navigation';
import ComingSoon from '../ComingSoon/ComingSoon';
import CompositionRow from '../CompositionRow/CompositionRow';

// Import JSON data
import CompositionsOrchestral from './CompositionsOrchestral.json';
import CompositionsChamber from './CompositionsChamber.json';

const propTypes = {
  pathname: PropTypes.string,
  handleClick: PropTypes.func,
};

// TODO: make it DRY!!!

const Orchestral = () => {
  const OrchestralCompositions = CompositionsOrchestral.map((composition, index) => {
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
      {OrchestralCompositions}
    </div>
  );
};

const Chamber = () => {
  const ChamberCompositions = CompositionsChamber.map((composition, index) => {
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
      {ChamberCompositions}
    </div>
  );
};

const Scores = () => <div>Scores</div>;

const Compositions = ({ pathname, handleClick }) => {
  const subSections = [
    { displayName: 'Orchestral', url: 'orchestral', component: Orchestral },
    { displayName: 'Chamber', url: 'chamber', component: Chamber },
    { displayName: 'Fabulusions', url: 'fabulusions', component: ComingSoon },
    { displayName: 'Scores', url: 'scores', component: Scores },
  ];
  const subSectionComponents = subSections.map(section => (
    <MatchWithCallback
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
        handleSectionClick={handleClick}
        pathname={pathname}
        hasBackground={true}
        bgColor="gray"
      />
      {subSectionComponents}
    </div>
  );
};

Compositions.propTypes = propTypes;

export default Compositions;
