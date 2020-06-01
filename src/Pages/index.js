import React from 'react';
import Theme from './Theme';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import User from './User';
import AboutUs from './AboutUs';
import CreateAccount from './CreateAccount';
import Usecases from './Usecases';
import ContactUs from './ContactUs';
import RootNew from './RootNew';

import HomeNew from './HomeNew';

const Pages = (props) => {
  return (
    <Theme>
      <Switch>
        <Route path="/login" component={Login} />
        <Route
          exact
          path="/home"
          render={(props) => <User {...props} menuOption={-1} />}
        />
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomeNew} />
        <Route path="/usecases" component={Usecases} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/createAccount" component={CreateAccount} />
      </Switch>
    </Theme>
  );
};

export default Pages;
