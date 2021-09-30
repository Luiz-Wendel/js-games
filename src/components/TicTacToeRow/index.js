import React from 'react';
import PropTypes from 'prop-types';
import TicTacToeColumn from '../TicTacToeColumn';
import style from './style.module.css';

const TicTacToeRow = ({ reference }) => (
  <section id={`row-${reference}`} className={style.row}>
    <TicTacToeColumn reference={0} parentReference={reference} />
    <TicTacToeColumn reference={1} parentReference={reference} />
    <TicTacToeColumn reference={2} parentReference={reference} />
  </section>
);

export default TicTacToeRow;

TicTacToeRow.propTypes = {
  reference: PropTypes.string,
}.isRequired;
