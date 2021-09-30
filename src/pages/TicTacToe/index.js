import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import {ToastsContainer, ToastsContainerPosition, ToastsStore} from 'react-toasts';
import PlayerCard from '../../components/PlayerCard';
import TicTacToeBoard from '../../components/TicTacToeBoard';

class TicTacToe extends React.Component {
  playerOneSymbol = <FontAwesomeIcon icon={ faTimes } size="2x" />;
  playerTwoSymbol = <FontAwesomeIcon icon={ faCircle } size="2x" />;

  render() {
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
      </main>
    )
  }
}

export default TicTacToe;
