import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled/macro';

import {MEDIA_QUERIES} from '../styles';

const StyledButton = styled.button(props => ({
  display: "block",
  fontSize: "16px",
  border: "none",
  color: "white",
  padding: "10px 20px 10px 20px",
  textAlign: "center",
  textDecoration: "none",
  textTransform: "uppercase",
  cursor: "pointer",
  width: "100%",
  backgroundColor: props.color === 'blue' ? '#3498db' : 'transparent',
  [MEDIA_QUERIES.hover]: {
    '&:hover': {
      backgroundImage: props.color === 'blue' ? 'linear-gradient(to bottom, #3cb0fd, #3498db)' : 'none',
      textDecoration: 'none',
    }
  },
}));

export default class Button extends React.Component {
  static propTypes = {
    color: PropTypes.oneOf(['blue']),
  };

  render() {
    const {color, children, ...rest} = this.props;
    return (
      <StyledButton color={color} {...rest}>{children}</StyledButton>
    );
  }
}
