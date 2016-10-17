import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './Navigation.css';

const baseClass = 'Navigation';

const propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    displayname: PropTypes.string,
    url: PropTypes.string,
  })),
  hasBackground: PropTypes.bool,
  bgColor: PropTypes.oneOf(['gray']),
  handleClick: PropTypes.func,
};

const defaultProps = {
  className: null,
};

const Navigation = ({
  pathname,
  sections,
  handleSectionClick,
  hasBackground,
  bgColor,
}) => {
  const navItems = sections.map((section, index) => {
    const linkUrl = (pathname) ? `${pathname}/${section.url}` : section.url;
    const shouldMatchExactly = (section.url === '/');
    return (
      <li className={`${baseClass}__nav__item`} key={index}>
        <Link
          to={linkUrl}
          onClick={() => handleSectionClick()}
          className={`${baseClass}__nav__item__link`}
          activeClassName={`${baseClass}__nav__item__link--active`}
          activeOnlyWhenExact={shouldMatchExactly}
        >
          {section.displayName}
        </Link>
      </li>
    );
  });
  const topLevelClass = (hasBackground && bgColor)
    ? `${baseClass}__bg--${bgColor}` : null;

  // TODO: make something more elegant for creating space under the background
  // that is position absolute to span the entire viewport width
  const backgroundHack = (hasBackground && bgColor)
    ? <div style={{height: '65px'}}></div> : null;

  return (
    <div>
      <nav className={topLevelClass}>
        <ul className={`${baseClass}__nav`}>
          {navItems}
        </ul>
      </nav>
      {backgroundHack}
    </div>
  );
};

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;
Navigation.baseClass = baseClass;

export default Navigation;