import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// import Container from './container';
import Navigation from 'components/Navigation';

import ConductAR from 'pages/ConductAR';
import ConductThis from 'pages/ConductTHIS';

const Router = () => {
  return <BrowserRouter>
    <div>
      <Route component={Navigation} />
      {/* <Container> */}
        <Switch>
          <Route exact path="/" render={() =>
            <Redirect to="/ar" />
          } />
          <Route exact path="/ar" component={ConductAR} />
          <Route exact path="/this" component={ConductThis} />
          <Route exact path="/deluxe" component={ConductThis} />
        </Switch>
      {/* </Container> */}
    </div>
  </BrowserRouter>
};

export default Router;
