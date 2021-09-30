import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import TicTacToe from '../pages/TicTacToe';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tic-tac-toe" component={TicTacToe} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
