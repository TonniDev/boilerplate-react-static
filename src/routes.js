import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/index';
import Rota1 from './pages/rota1';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/rota1' component={Rota1} exact />
    </Switch>
  );
};

export default Routes;
