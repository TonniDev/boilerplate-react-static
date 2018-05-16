import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {
  Home,
  Exemplo
} from '../containers/pages/index';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/exemplo" component={Exemplo} />
    </Switch>
  );
};

export default Routes;
