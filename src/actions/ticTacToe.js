export const PLAYER_MOVE = 'PLAYER_MOVE';
export const SET_WINNER = 'SET_WINNER';
export const RESET_BOARD = 'RESET_BOARD';

export const playerMove = (payload) => ({
  type: PLAYER_MOVE,
  payload,
});

export const setWinner = (payload) => ({
  type: SET_WINNER,
  payload,
});

export const resetBoard = () => ({
  type: RESET_BOARD
});
