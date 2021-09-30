import React from 'react';
import GameCard from '../../components/GameCard';

class Home extends React.Component {
  render() {
    return (
      <main>
        <h1>JS Games</h1>
        <section>
          <GameCard title="TicTacToe" path="/tic-tac-toe" />
        </section>
      </main>
    );
  }
}

export default Home;
