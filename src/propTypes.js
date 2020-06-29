import PropTypes from 'prop-types';

export const Section = PropTypes.exact({
  displayName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
  exact: PropTypes.bool.isRequired,
});

export const Sections = PropTypes.arrayOf(Section).isRequired;
