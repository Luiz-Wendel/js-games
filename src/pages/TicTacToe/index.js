import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import {ToastsContainer, ToastsContainerPosition, ToastsStore} from 'react-toasts';
import { connect } from 'react-redux';
import { resetBoard } from '../../actions';
import PlayerCard from '../../components/PlayerCard';
import TicTacToeBoard from '../../components/TicTacToeBoard';
import Button from '../../components/Button';

class TicTacToe extends React.Component {
  constructor() {
    super();

    this.handleBoardReset = this.handleBoardReset.bind(this);
  }


  playerOneSymbol = <FontAwesomeIcon icon={ faTimes } size="2x" />;
  playerTwoSymbol = <FontAwesomeIcon icon={ faCircle } size="2x" />;

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
            <PlayerCard id="p1" title="Player 1" image={ this.playerOneSymbol } />
            <PlayerCard id="p2" title="Player 2" image={ this.playerTwoSymbol } />
          </section>
          <TicTacToeBoard />
        </section>
        <section>
          <Button
            onClick={ this.handleBoardReset }
            content={ winner ? "Play Again" : "Reset Board"}
          />
        </section>
      </main>
    )
  }
}

const mapStateToProps = ({ ticTacToe: { winner }}) => ({
  winner,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchResetBoard: () => dispatch(resetBoard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
