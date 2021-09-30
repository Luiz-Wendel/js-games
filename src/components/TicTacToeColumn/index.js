import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style.module.css';

const TicTacToeColumn = ({ reference, parentReference }) => {
  const [columnValue, setColumnValue] = React.useState();
  const { gameState } = useSelector(({ ticTacToe }) => ticTacToe);

  React.useEffect(() => {
    const stateValue = gameState[parentReference][reference];

    const playerOneSymbol = <FontAwesomeIcon icon={faTimes} size="2x" />;
    const playerTwoSymbol = <FontAwesomeIcon icon={faCircle} size="2x" />;

    if (stateValue === 0) setColumnValue();
    if (stateValue === 1) setColumnValue(playerOneSymbol);
    if (stateValue === 2) setColumnValue(playerTwoSymbol);
  }, [gameState, reference, parentReference]);

  return (
    <section
      id={`column-${reference}`}
      className={style.column}
    >
      {
        columnValue
      }
    </section>
  );
};

export default TicTacToeColumn;

TicTacToeColumn.propTypes = {
  reference: PropTypes.string,
  parentReference: PropTypes.string,
}.isRequired;
