import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import ResponsiveImage from './ResponsiveImage';

const propTypes = {
  pathname: PropTypes.string,
};

const Home = ({ pathname }) => {
  return (
    <DocumentTitle title='Aleksey Nikolsky - Composer, Scientist'>
      <div>
        <ResponsiveImage src="http://lorempixel.com/800/600/cats/7" />
      </div>
    </DocumentTitle>
  );
};

Home.propTypes = propTypes;

export default Home;
