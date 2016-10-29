import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './Header.css';

import Navigation from '../Navigation/Navigation';

const baseClass = 'Header';

const propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    displayname: PropTypes.string,
    url: PropTypes.string,
  })),
};

const Header = ({ sections }) => {
  const homeSection = sections.find(section => section.displayName = 'Home');
  return (
    <header>
      <div className={`${baseClass}__site-title`}>
        <Link to={homeSection.url}>
          <h1>Aleksey Nikolsky</h1>
        </Link>
      </div>
      <Navigation {...{sections}} />
    </header>
  );
};

Header.propTypes = propTypes;

export default Header;
