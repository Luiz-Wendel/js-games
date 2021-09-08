import React from 'react';
import TicTacToeRow from '../TicTacToeRow';
import style from './style.module.css';
import getNumbersFromString from '../../helpers/utils';
import { useDispatch, useSelector } from 'react-redux';
import { playerMove } from '../../actions';

const TicTacToeBoard = () => {
  const dispatch = useDispatch();
  const { gameState, playerTurn } = useSelector(({ ticTacToe }) => ticTacToe);

  const handlePlayerTurn = (row, column, target) => {
    const payload = {
      row,
      column
    };

    dispatch(playerMove(payload));

    target.dataset.player = playerTurn;
  };

  const handlePlayerMove = ({ target }) => {
    const { id } = target;

    if (id.includes('column')) {
      const column = getNumbersFromString(id);
      const row = getNumbersFromString(target.parentElement.id);

      if (gameState[row][column] === 0) handlePlayerTurn(row, column, target);
    }
  }

  return (
    <section id="board" onClick={ handlePlayerMove } className={ style.board }>
      <TicTacToeRow reference={ 0 } />
      <TicTacToeRow reference={ 1 } />
      <TicTacToeRow reference={ 2 } />
    </section>
  );
};

export default TicTacToeBoard;
