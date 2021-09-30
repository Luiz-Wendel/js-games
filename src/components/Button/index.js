import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, content, classes }) => (
  <button type="button" onClick={onClick} className={{ ...classes }}>
    { content }
  </button>
);

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  content: PropTypes.string,
  class: PropTypes.array,
}.isRequired;
