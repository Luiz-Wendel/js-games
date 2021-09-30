import React from 'react';
import { useSelector } from 'react-redux';

const PlayerCard = ({ id, title, image }) => {
  const { score } = useSelector(({ ticTacToe }) => ticTacToe);

  return (
    <section id={ id }>
      <h2>{ title }</h2>
      { image }
      <span>{ score[id === 'p1' ? 1 : 2] }</span>
    </section>
  );
};

export default PlayerCard;
