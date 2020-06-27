/** @jsx jsx */

import {jsx} from '@emotion/core';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import React from 'react';
import {MEDIA_QUERIES} from '../styles';
import {Par, Heading3} from './common';

export const HERO_OVERLAY_TYPES = {
  RESEARCH: 'RESEARCH',
  STATEMENT: 'STATEMENT',
};

const BaseHeroOverlayStyles = {
  position: 'absolute',
  width: '50%',
  padding: '14px',
  boxSizing: 'border-box',
  [MEDIA_QUERIES.breakpoints[2]]: {
    position: 'absolute',
    width: '93%',
    margin: '0 auto 0',
    right: '5px',
    left: '5px',
  },
  [MEDIA_QUERIES.breakpoints[1]]: {
    position: 'relative',
    width: '100%',
    margin: '16px 0 0 0',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};

const ResearchWrapperCss = {
  ...BaseHeroOverlayStyles,
  right: '28px',
  bottom: '30px',
  backgroundColor: 'rgba(249, 241, 220, .88)',
};

const StatementWrapperCss = {
  ...BaseHeroOverlayStyles,
  top: '30px',
  left: '28px',
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
};

export default class HeroOverlay extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(Object.keys(HERO_OVERLAY_TYPES)).isRequired,
  };

  render() {
    let wrapperCss = {};
    switch (this.props.type) {
      case HERO_OVERLAY_TYPES.RESEARCH:
        wrapperCss = ResearchWrapperCss;
        break;
      case HERO_OVERLAY_TYPES.STATEMENT:
        wrapperCss = StatementWrapperCss;
        break;
      // no default
    }

    return (
      <div css={wrapperCss}>
        {this.props.children}
      </div>
    );
  }
}

export const HeroOverlayTitle = styled(Heading3)({
  textAlign: 'left',
  marginBottom: '0.5em',
});

export const HeroOverlayPar = styled(Par)({
  fontSize: '0.9em',
  lineHeight: '1.6em',
  marginBottom: '1em',
  '&:last-child': {
    marginBottom: 0,
  },
});
