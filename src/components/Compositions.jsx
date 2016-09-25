import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

const propTypes = {
  pathname: PropTypes.string,
};

const Compositions = ({ pathname }) => {
  return (
    <DocumentTitle title='Aleksey Nikolsky - Compositions'>
      <div><h2>Compositions</h2></div>
    </DocumentTitle>
  );
};

Compositions.propTypes = propTypes;

export default Compositions;
