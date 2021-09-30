import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

const GameCard = ({ title, path }) => {
  const history = useHistory();

  const handleGame = () => {
    history.push('/tic-tac-toe');
  };

  return (
    <section onClick={handleGame} aria-hidden="true">
      <iframe src={path} title={title} />
      <h2>{ title }</h2>
    </section>
  );
};

export default GameCard;

GameCard.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
}.isRequired;
