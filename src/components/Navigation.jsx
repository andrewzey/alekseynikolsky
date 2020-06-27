import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import React from 'react';
import {NavLink} from 'react-router-dom';
import {logNavClick} from '../analytics';
import {Sections} from '../propTypes';
import {MEDIA_QUERIES, SITE_MIN_WIDTH} from '../styles';

const NavBackground = styled.div({
  position: "absolute",
  padding: "0.75rem 0 0 0",
  left: "0",
  width: "100vw",
  minWidth: SITE_MIN_WIDTH,
  backgroundColor: "#eee",
  boxSizing: "border-box",
  zIndex: "2",
});

const NavList = styled.nav({
  textAlign: 'center',
});

const NavItem = styled.li({
  display: 'inline-block',
  fontFamily: 'Poiret One',
  fontWeight: 'normal',
  fontSize: '1.25rem',
  lineHeight: '1.75rem',
  boxSizing: 'border-box',
  height: '1.5rem',

  marginBottom: '1rem',
  marginRight: '1.25rem',
  '&:last-child': {
    marginRight: 0,
  },
});

const NAV_LINK_COLOR = '#555';
const NAV_LINK_BORDER = '2px solid #AAA';

const StyledNavLink = styled(NavLink)({
  color: NAV_LINK_COLOR,
  [MEDIA_QUERIES.hover]: {
    '&:hover': {
      borderBottom: NAV_LINK_BORDER,
    }
  },
});

const navLinkStyleActive = {
  color: NAV_LINK_COLOR,
  borderBottom: NAV_LINK_BORDER,
};

class Navigation extends React.Component {
  static propTypes = {
    sections: Sections,
    path: PropTypes.string,
    hasBackground: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
  };

  updateBackgroundClearDivHackHeight() {
    if (this.backgroundClearDivHack && this.navBackground) {
      this.backgroundClearDivHack.style.height = `${this.navBackground.clientHeight + 10}px`;
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
    // that is position absolute to span the entire viewport width
    if (!this.props.hasBackground) {
      return null;
    }

    let height = '65px';
    if (this.navBackground) {
      height = `${this.navBackground.clientHeight}px`;
    }
    return (
      <div
        style={{height: height}}
        ref={(c) => this.backgroundClearDivHack = c}
      ></div>
    );
  }

  render() {
    const navItems = this.props.sections.map((section, index) => {
      const linkUrl = section.path;
      return (
        <NavItem key={index}>
          <StyledNavLink
            to={linkUrl}
            activeStyle={navLinkStyleActive}
            isActive={(match, location) => {
              return section.exact
                ? location.pathname === section.path
                : location.pathname.includes(section.path);
              }
            }
            exact
            onClick={()=> {logNavClick({path: linkUrl})}}
          >
            {section.displayName}
          </StyledNavLink>
        </NavItem>
      );
    });

    const nav = <NavList>{navItems}</NavList>
    const content = this.props.hasBackground
      ? (
        <NavBackground ref={(ref) => this.navBackground = ref}>
          {nav}
        </NavBackground>
      )
      : nav;

    return (
      <div>
        {content}
        {this.renderBackgroundClearDivHack()}
      </div>
    );
  }
}

export default Navigation;
