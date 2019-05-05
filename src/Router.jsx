import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './pages/App';
import Welcome from './pages/Welcome';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/welcome" exact component={Welcome} />
    </Switch>
  );
};

export default Router;
