// with 1rem = 16px, the breakpoints are 640, 832, 1024
const breakpoints = ['40em', '52em', '64rem'];

export const MEDIA_QUERIES = {
  breakpoints: breakpoints.map(
    breakpoint => `@media (max-width: ${breakpoint})`
  ),
  hover: `@media (hover: hover)`,
};

export const HEADING_TEXT_STYLE = {
  fontFamily: 'Poiret One',
  fontWeight: 900,
  textTransform: 'uppercase',
  lineHeight: '1.4em',
};

export const BODY_TEXT_STYLE = {
  fontFamily: 'Helvetica, Arial, sans-serif',
  lineHeight: '1.5em',
};

export const LINK_COLOR = '#3498db';

export const IMG_STYLES = {
  INLINE: {
    paddingBottom: '0.5rem',
    [MEDIA_QUERIES.breakpoints[0]]: {
      display: 'block',
      textAlign: 'center',
      float: 'none',
      maxWidth: '100%',
      padding: '0.25rem 0 1rem 0',
    },
  },
  INLINE_LEFT: {float: 'left', paddingRight: '1rem'},
  INLINE_RIGHT: {float: 'right', paddingLeft: '1rem'},
  INLINE_CENTER: {
    display: 'block',
    textAlign: 'center',
    maxWidth: '75%',
    margin: '0 auto 1rem',
  },
  INLINE_PORTRAIT: {maxWidth: '200px'},
  INLINE_LANDSCAPE: {maxWidth: '250px'},
};

export const SITE_MIN_WIDTH = '240px';

// NOTE: only used for Rebass Box components
export const theme = {
  breakpoints,
  space: [
    4, 8, 16, 32, 64, 128, 256
  ],
};
