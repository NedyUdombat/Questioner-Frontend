import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './pages/Index/Index';
import Authentication from './pages/Authentication/Authentication';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/register" exact component={Authentication} />
      <Route path="/login" exact component={Authentication} />
    </Switch>
  );
};

export default Router;
