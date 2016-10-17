import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
// import { Match } from 'react-router';
// import { Flex, Box } from 'reflexbox';
import MatchWithCallback from '../MatchWithCallback/MatchWithCallback';

import Navigation from '../Navigation/Navigation';

import ComingSoon from '../ComingSoon/ComingSoon';

const propTypes = {
  pathname: PropTypes.string,
  handleClick: PropTypes.func,
};

const Orchestral = () => <div>Orchestral</div>;
const Chamber = () => <div>Chamber</div>;
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
