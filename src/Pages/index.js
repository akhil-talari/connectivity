import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import User from './User';
const Pages = (props) => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={User} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Pages;
