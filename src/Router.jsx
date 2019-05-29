import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './pages/Index/Index';
import Authentication from './pages/Authentication/Authentication';
import Meetups from './pages/Meetups/Meetups';
import NotFound from './pages/Errors/404';
import GuestWrapper from './pages/GuestWrapper/GuestWrapper';
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <GuestWrapper exact path="/register" component={Authentication} />
      <GuestWrapper exact path="/login" component={Authentication} />
      <ProtectedRoute path="/meetups" component={Meetups} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Router;
