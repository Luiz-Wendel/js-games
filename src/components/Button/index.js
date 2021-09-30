import React from 'react';

const Button = ({ onClick, content, classes }) => {
  return (
    <button type="button" onClick={onClick} className={{ ...classes }}>
      { content }
    </button>
  );
};

export default Button;
