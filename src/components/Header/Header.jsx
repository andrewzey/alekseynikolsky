import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { sendEvent, GA_CATEGORY, GA_ACTION } from '../../analytics';

import './Header.css';

import Navigation from '../Navigation/Navigation';

const baseClass = 'Header';

const propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    displayname: PropTypes.string,
    url: PropTypes.string,
  })),
};

function logNavClick(url) {
  sendEvent({
    category: GA_CATEGORY.NAV,
    action: GA_ACTION.CLICK,
    label: url,
  });
}

const Header = ({ sections }) => {
  const homeSection = sections.find(section => section.displayName = 'Home');
  return (
    <header>
      <div className={`${baseClass}__site-title`}>
        <Link to={homeSection.url} onClick={() => logNavClick(homeSection.url)}>
          <h1>Aleksey Nikolsky</h1>
        </Link>
      </div>
      <Navigation {...{sections}} />
    </header>
  );
};

Header.propTypes = propTypes;

export default Header;
