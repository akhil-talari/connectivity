import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import User from './User';
const Pages = (props) => {
  return (
    <Switch>
      <Route path="/connectivity/login" component={Login} />
      <Route path="/connectivity/home" component={User} />
      <Route exact path="/connectivity/" component={Home} />
    </Switch>
  );
};

export default Pages;
