import PropTypes from 'prop-types';
import React from 'react';
import {Helmet} from 'react-helmet';
import {Redirect, Route, Switch} from 'react-router-dom';
import CompositionRow from '../CompositionRow';
import Navigation from '../Navigation';
import RouteWithGA from '../RouteWithGA';
import CompositionsChamber from './CompositionsChamber.json';
import CompositionFabulusions from './CompositionsFabulusions.json';
// Import JSON data
import CompositionsOrchestral from './CompositionsOrchestral.json';
import CompositionsScores from './CompositionsScores.json';


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

function CompositionSectionFactory(type) {
  const title = pageTitleByType[type];
  const data = dataByType[type];

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
    <RouteWithGA
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
        {/* TODO: Add compositions landing page and remove this */}
        <Route
          exact
          path="/compositions"
          render={() => <Redirect to="/compositions/orchestral" />}
        />
        {subSectionComponents}
      </Switch>
    </div>
  );
};
Compositions.propTypes = propTypes;
