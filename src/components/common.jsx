import styled from '@emotion/styled/macro';
import {BODY_TEXT_STYLE, HEADING_TEXT_STYLE, MEDIA_QUERIES} from '../styles';

export const Heading1 = styled.h1({
  ...HEADING_TEXT_STYLE,
  color: 'black',
  fontSize: '3rem',
  lineHeight: '3rem',
  marginTop: '0rem',
  paddingBottom: '1.125rem',
  [MEDIA_QUERIES.breakpoints[1]]: {
    fontSize: '2em',
  }
});

export const Heading2 = styled.h3({
  ...HEADING_TEXT_STYLE,
  fontSize: '1.5rem',
  fontWeight: 'bold',
  paddingTop: 10,
  paddingBottom: 10,
  textAlign: 'center',
});

export const Heading3 = styled.h3({
  ...HEADING_TEXT_STYLE,
  fontSize: '1.375rem',
  paddingTop: 10,
  paddingBottom: 10,
  textAlign: 'center',
});

export const Heading4 = styled.h4({
  ...HEADING_TEXT_STYLE,
  fontSize: '1.25rem',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  clear: 'both',
});

export const Heading5 = styled.h5({
  ...BODY_TEXT_STYLE,
  fontWeight: 'bold',
});

export const Heading6 = styled.h5({
  ...BODY_TEXT_STYLE,
  fontWeight: 'regular',
  fontStyle: 'italic',
  color: 'rgb(40,40,40)',
});


export const Par = styled.p({
  ...BODY_TEXT_STYLE,
});
