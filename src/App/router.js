import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navigation from 'components/Navigation';

import ConductAR from 'pages/ConductAR';
import ConductThis from 'pages/ConductTHIS';

const Router = () => {
  return <BrowserRouter>
    <div>
      <Route component={Navigation} />
        <Switch>
          <Route exact path="/" render={() =>
            <Redirect to="/ar" />
          } />
          <Route exact path="/ar" component={ConductAR} />
          <Route exact path="/this" component={ConductThis} />
          <Route exact path="/deluxe" component={ConductThis} />
        </Switch>
    </div>
  </BrowserRouter>
};

export default Router;
