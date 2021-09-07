import React from 'react';
import style from './style.module.css';

const TicTacToeColumn = ({ reference }) => {
  return (
    <section
      id={ `column-${reference}` }
      className={ style.column }
    >
    </section>
  )
};

export default TicTacToeColumn;
