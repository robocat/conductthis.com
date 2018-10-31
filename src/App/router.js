import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navigation from 'components/Navigation';

import Ar from 'pages/ar';
import This from 'pages/this';
import Deluxe from 'pages/deluxe';
import Privacy from 'pages/privacy';

const Router = () => {
  return <BrowserRouter>
    <div>
      <Route component={Navigation} />
        <Switch>
          <Route exact path="/" render={() =>
            <Redirect to="/deluxe" />
          } />
          <Route exact path="/ar" component={Ar} />
          <Route exact path="/this" component={This} />
          <Route exact path="/deluxe" component={Deluxe} />
          <Route exact path="/privacy" component={Privacy} />
        </Switch>
    </div>
  </BrowserRouter>
};

export default Router;

