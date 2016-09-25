import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

const propTypes = {
  pathname: PropTypes.string,
}

const Research = ({ pathname }) => {
  return (
    <DocumentTitle title='Aleksey Nikolsky - Research'>
      <div><h2>Research</h2></div>
    </DocumentTitle>
  );
};

Research.propTypes = propTypes;

export default Research;
