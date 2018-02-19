import React from 'react';
import {Route} from 'react-router-dom';
import {
  Home,
  Exemplo
} from '../containers/pages/index';

const Routes = () => {
  return (
    <div>
      <Route path="/" component={Home} exact />
      <Route path="/exemplo" component={Exemplo} exact />
    </div>
  );
};

export default Routes;
