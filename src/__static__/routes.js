import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {
  Home,
  Exemplo
} from '../containers/pages/index';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/exemplo" component={Exemplo} exact />
    </Switch>
  );
};

export default Routes;
