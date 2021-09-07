import React from 'react'
import PlayerCard from '../../components/PlayerCard';

class TicTacToe extends React.Component {
  render() {
    return (
      <main>
        <h1>Tic Tac Toe</h1>
        <section>
          <PlayerCard id="p1" title="Player 1" image="X" />
          <PlayerCard id="p2" title="Player 2" image="O" />
        </section>
      </main>
    )
  }
}

export default TicTacToe;
