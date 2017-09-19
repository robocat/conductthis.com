import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
          <Route exact path="/" component={ConductAR} />
          <Route exact path="/conduct-ar" component={ConductAR} />
          <Route exact path="/conduct-this" component={ConductThis} />
        </Switch>
      {/* </Container> */}
    </div>
  </BrowserRouter>
};

export default Router;
