import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

const propTypes = {
  pathname: PropTypes.string,
};

const About = ({ pathname }) => {
  return (
    <DocumentTitle title='Aleksey Nikolsky - About'>
      <div><h2>About</h2></div>
    </DocumentTitle>
  );
};

About.propTypes = propTypes;

export default About;
