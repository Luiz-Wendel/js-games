export const PLAYER_MOVE = 'PLAYER_MOVE';
export const SET_WINNER = 'SET_WINNER';

export const playerMove = (payload) => ({
  type: PLAYER_MOVE,
  payload,
});

export const setWinner = (payload) => ({
  type: SET_WINNER,
  payload,
});
