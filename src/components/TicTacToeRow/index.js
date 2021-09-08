import React from 'react';
import TicTacToeColumn from '../TicTacToeColumn';
import style from './style.module.css';

const TicTacToeRow = ({ reference }) => {
  return (
    <section id={ `row-${reference}` } className={ style.row }>
      <TicTacToeColumn reference={ 0 } parentReference={ reference } />
      <TicTacToeColumn reference={ 1 } parentReference={ reference } />
      <TicTacToeColumn reference={ 2 } parentReference={ reference } />
    </section>
  );
};

export default TicTacToeRow;
