import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './pages/Index/Index';
import Authentication from './pages/Authentication/Authentication';
import Meetups from './pages/Meetups/Meetups';
import Admin from './pages/Admin/Admin';
import NotFound from './pages/Errors/404';

import GuestWrapper from './pages/GuestWrapper/GuestWrapper';
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute';
import AdminRoute from './pages/AdminRoute/AdminRoute';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <GuestWrapper exact path="/register" component={Authentication} />
      <GuestWrapper exact path="/login" component={Authentication} />
      <ProtectedRoute path="/meetups" component={Meetups} />
      <AdminRoute path="/admin" exact component={Admin} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Router;
