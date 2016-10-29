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
};

const defaultProps = {
  className: null,
};

class Navigation extends React.Component {
  updateBackgroundClearDivHackHeight() {
    if (this.backgroundClearDivHack && this.navNode) {
      this.backgroundClearDivHack.style.height = `${this.navNode.clientHeight + 10}px`;
    }
  }

  componentDidMount() {
    this.updateBackgroundClearDivHackHeight();
    window.addEventListener('resize', this.updateBackgroundClearDivHackHeight.bind(this));
  }

  componentDidUpdate() {
    this.updateBackgroundClearDivHackHeight();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateBackgroundClearDivHackHeight.bind(this));
  }

  renderBackgroundClearDivHack() {
    // TODO: make something more elegant for creating space under the background
    // that is position absolute to span the entire viewport width
    if (!this.props.hasBackground || !this.props.bgColor) {
      return null;
    }

    let height = '65px';
    if (this.navNode) {
      height = `${this.navNode.clientHeight}px`;
    }
    return (
      <div
        style={{height: height}}
        ref={(c) => this.backgroundClearDivHack = c }
      ></div>
    );
  }

  render() {
    const navItems = this.props.sections.map((section, index) => {
      const linkUrl = (this.props.pathname)
        ? `${this.props.pathname}/${section.url}`
        : section.url;
      const shouldMatchExactly = (section.url === '/');
      return (
        <li className={`${baseClass}__nav__item`} key={index}>
          <Link
            to={linkUrl}
            className={`${baseClass}__nav__item__link`}
            activeClassName={`${baseClass}__nav__item__link--active`}
            activeOnlyWhenExact={shouldMatchExactly}
          >
            {section.displayName}
          </Link>
        </li>
      );
    });
    const topLevelClass = (this.props.hasBackground && this.props.bgColor)
      ? `${baseClass}__bg--${this.props.bgColor}` : null;

    return (
      <div>
        <nav
          ref={(c) => this.navNode = c }
          className={topLevelClass}
        >
          <ul className={`${baseClass}__nav`}>
            {navItems}
          </ul>
        </nav>
        {this.renderBackgroundClearDivHack()}
      </div>
    );
  }
}

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;
Navigation.baseClass = baseClass;

export default Navigation;
