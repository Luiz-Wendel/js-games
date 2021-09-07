import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route component={ NotFound } />
      </Switch>
    )
  }
}

export default Routes;
