import React from 'react';
import TicTacToeColumn from '../TicTacToeColumn';
import style from './style.module.css';

const TicTacToeRow = ({ reference }) => {
  return (
    <section id={ `row-${reference}` } className={ style.row }>
      <TicTacToeColumn reference={ 0 } />
      <TicTacToeColumn reference={ 1 } />
      <TicTacToeColumn reference={ 2 } />
    </section>
  );
};

export default TicTacToeRow;
