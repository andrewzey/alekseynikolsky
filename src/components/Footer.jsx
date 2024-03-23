import React from 'react';
import styled from '@emotion/styled/macro';
import {BODY_TEXT_STYLE} from '../styles';

const StyledFooter = styled.footer({
  ...BODY_TEXT_STYLE,
  textAlign: 'center',
  color: '#AAA',
  fontSize: '0.9rem',
  fontWeight: 500,
  marginTop: '1.5rem',
});

const AttributionSpan = styled.span({
  fontSize: '0.75rem',
});


const Footer = () => (
  <StyledFooter>
    Copyright &copy; 2024 Aleksey Nikolsky <br />
    <AttributionSpan>Site Design by Tori Press & Andrew Zey</AttributionSpan>
  </StyledFooter>
);

export default Footer;
