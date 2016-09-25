import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import './Header.css';

const baseClass = 'Header';

const propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    displayname: PropTypes.string,
    url: PropTypes.string,
  })),
  activeSection: PropTypes.string,
  handleSectionClick: PropTypes.func,
};

const Header = ({ sections, activeSection, handleSectionClick }) => {
  const navItems = sections.map((section, index) => {
    const classes = classNames({
      [`${baseClass}__nav__item`]: true,
      [`${baseClass}__nav__item--active`]: section.displayName === activeSection,
    });
    return (
      <li className={classes} key={index}>
        <Link to={section.url} onClick={() => handleSectionClick(section.displayName)}>
          {section.displayName}
        </Link>
      </li>
    )
  });

  const homeSection = sections.find(section => section.displayName = 'Home');

  return (
    <header>
      <div className={`${baseClass}__site-title`}>
        <Link to={homeSection.url} onClick={() => handleSectionClick(homeSection.displayName)}>
          <h1>Aleksey Nikolsky</h1>
        </Link>
      </div>
      <nav>
        <ul className={`${baseClass}__nav`}>
          {navItems}
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = propTypes;

export default Header;
