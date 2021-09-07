import { PLAYER_MOVE } from '../actions';

const INITIAL_STATE = {
  gameState: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  playerTurn: 1,
};

const setMove = (gameState, { row, column }, player) => {
  const newGameState = [...gameState];

  newGameState[row][column] = player;

  return newGameState;
};

const ticTacToeReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case PLAYER_MOVE:
      return {
        gameState: setMove(state.gameState, payload, state.playerTurn),
        playerTurn: state.playerTurn === 1 ? 2 : 1,
      };
    default:
      return state;
  }
};

export default ticTacToeReducer;
