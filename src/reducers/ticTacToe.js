import { PLAYER_MOVE, SET_WINNER } from '../actions';

const INITIAL_STATE = {
  gameState: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  playerTurn: 1,
  winner: 0,
  score: {
    1: 0,
    2: 0,
  },
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
        ...state,
        gameState: setMove(state.gameState, payload, state.playerTurn),
        playerTurn: state.playerTurn === 1 ? 2 : 1,
      };
    case SET_WINNER:
      return {
        ...state,
        winner: payload.winner,
        score: {
          ...state.score,
          [payload.winner]: state.score[payload.winner] + 1,
        }
      };
    default:
      return state;
  }
};

export default ticTacToeReducer;
