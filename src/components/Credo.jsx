import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

const propTypes = {
  pathname: PropTypes.string,
};

const Credo = ({ pathname }) => {
  return (
    <DocumentTitle title='Aleksey Nikolsky - Credo'>
      <div><h2>Credo</h2></div>
    </DocumentTitle>
  );
};

Credo.propTypes = propTypes;

export default Credo;
