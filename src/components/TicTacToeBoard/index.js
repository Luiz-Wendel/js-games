import React from 'react';
import TicTacToeRow from '../TicTacToeRow';

const TicTacToeBoard = () => {
  return (
    <section id="board">
      <TicTacToeRow reference={ 1 } />
      <TicTacToeRow reference={ 2 } />
      <TicTacToeRow reference={ 3 } />
    </section>
  );
};

export default TicTacToeBoard;
