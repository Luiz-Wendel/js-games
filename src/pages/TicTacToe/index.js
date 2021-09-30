import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';
import { resetBoard } from '../../actions';
import PlayerCard from '../../components/PlayerCard';
import TicTacToeBoard from '../../components/TicTacToeBoard';
import Button from '../../components/Button';

const playerOneSymbol = <FontAwesomeIcon icon={faTimes} size="2x" />;
const playerTwoSymbol = <FontAwesomeIcon icon={faCircle} size="2x" />;

class TicTacToe extends React.Component {
  constructor() {
    super();

    this.handleBoardReset = this.handleBoardReset.bind(this);
  }

  handleBoardReset() {
    const { dispatchResetBoard } = this.props;

    dispatchResetBoard();
  }

  render() {
    const { winner } = this.props;

    return (
      <main>
        <h1>Tic Tac Toe</h1>
        <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore} />
        <section>
          <section>
            <PlayerCard id="p1" title="Player 1" image={playerOneSymbol} />
            <PlayerCard id="p2" title="Player 2" image={playerTwoSymbol} />
          </section>
          <TicTacToeBoard />
        </section>
        <section>
          <Button
            onClick={this.handleBoardReset}
            content={winner ? 'Play Again' : 'Reset Board'}
          />
        </section>
      </main>
    );
  }
}

const mapStateToProps = ({ ticTacToe: { winner } }) => ({
  winner,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchResetBoard: () => dispatch(resetBoard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);

TicTacToe.propTypes = {
  dispatchResetBoard: PropTypes.func,
  winner: PropTypes.string,
}.isRequired;
