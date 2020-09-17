import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Carrinho from '../pages/Carrinho';
import Checkout from '../pages/Checkout';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Carrinho} />
    <Route path="/checkout" component={Checkout} />
  </Switch>
)

export default Routes;

