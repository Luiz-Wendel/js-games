import React from 'react';
import TicTacToeRow from '../TicTacToeRow';
import style from './style.module.css';
import getNumbersFromString from '../../helpers/utils';
import { useDispatch } from 'react-redux';
import { playerMove } from '../../actions';

const TicTacToeBoard = () => {
  const dispatch = useDispatch();

  const handlePlayerMove = ({ target }) => {
    const { id } = target;

    if (id.includes('column')) {
      const column = getNumbersFromString(id);
      const row = getNumbersFromString(target.parentElement.id);

      const payload = {
        row,
        column
      };

      dispatch(playerMove(payload));
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
