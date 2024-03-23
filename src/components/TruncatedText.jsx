import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import React from 'react';
import {Par} from './common';
import {LINK_COLOR, MEDIA_QUERIES} from '../styles';

/**
 * Truncate text.
 * @param {string} text - Text to truncate.
 * @param {number} length - Length at which to truncate `text`.
 *
 * @returns {string} Truncated string.
 */
function truncate(text = '', length = 0) {
  if (!text || text.length <= length) {
    return text;
  }

  return text.slice(0, length).concat('...');
};

const StyledPar = styled(Par)({
  height: 'auto',
  whiteSpace: 'pre-line',
});

const MoreLink = styled.span({
  color: LINK_COLOR,
  [MEDIA_QUERIES.hover]: {
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    }
  },
});

export default class TruncatedText extends React.Component {
  static propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    expandable: PropTypes.bool.isRequired,
    length: PropTypes.number.isRequired,
    lessLinkText: PropTypes.string.isRequired,
    moreLinkText: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    preventDefaultOnExpand: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    expandable: false,
    length: 0,
    lessLinkText: 'less',
    moreLinkText: 'more',
    preventDefaultOnExpand: true,
  };

  state = {
    expanded: false,
  };

  onClickTextLink = (event) => {
    if (this.props.preventDefaultOnExpand) {
      event.preventDefault();
    }

    // Don't do anything else if expandable is not true.
    if (!this.props.expandable) {
      return;
    }

    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }

  renderMoreLink() {
    const text = this.props.expandable
      ? this.state.expanded ? this.props.lessLinkText : this.props.moreLinkText
      : this.props.moreLinkText;

    return (
      <MoreLink onClick={this.onClickTextLink}>{text}</MoreLink>
    );
  }

  render() {
    const fullText = this.props.text;
    const truncatedText = truncate(this.props.text, this.props.length);
    const isTruncateable = truncatedText !== fullText;
    const showTruncated = isTruncateable && !this.state.expanded;

    const text = showTruncated ? truncatedText : fullText;
    const moreLink = this.props.expandable && isTruncateable
      ? this.renderMoreLink()
      : null;

    return <StyledPar>{text} {moreLink}</StyledPar>;
  }
}
