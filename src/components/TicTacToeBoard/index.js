import React from 'react';
import TicTacToeRow from '../TicTacToeRow';
import style from './style.module.css';
import { getNumbersFromString, reverseMatrix } from '../../helpers/utils';
import { useDispatch, useSelector } from 'react-redux';
import { playerMove } from '../../actions';

const horizontalVictory = (gameState) => {
  let hasVictory = 0;

  gameState.forEach((row) => {
    const rowSet = [...new Set(row)];

    if (rowSet[0] !== 0 && rowSet.length === 1) hasVictory = rowSet[0];
  });

  return hasVictory;
};

const verticalVictory = (gameState) => {
  const reversedGameState = reverseMatrix(gameState);

  return horizontalVictory(reversedGameState);
};

const diagonalVictory = (gameState) => {
  const diagonals = [[[0, 0], [1, 1], [2, 2]], [[0, 2], [1, 1], [2, 0]]];
  const diagonalGameState = [];

  diagonals.forEach((diagonal) => {
    const newRow = [];

    diagonal.forEach(([row, column]) => {
      newRow.push(gameState[row][column]);
    })

    diagonalGameState.push(newRow);
  });

  return horizontalVictory(diagonalGameState);

};

const checkVictory = (gameState) => horizontalVictory(gameState)
  || verticalVictory(gameState)
  || diagonalVictory(gameState);

const TicTacToeBoard = () => {
  const dispatch = useDispatch();
  const { gameState, playerTurn } = useSelector(({ ticTacToe }) => ticTacToe);

  React.useEffect(() => {
    console.log(checkVictory(gameState));
  }, [gameState]);

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
