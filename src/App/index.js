import React from 'react';
import Typekit from 'react-typekit';
import styled from 'styled-components';

import Router from './router';
import './normalize.css';
import './common.css';

const Container = styled.div`
  background-color: #202020;
  color: #fff;
  min-height: 100vh;
`;

const App = () => {
  return (
    <Container>
      <Router />
      <Typekit kitId="hbp2ihq" />
    </Container>
  )
};

export default App;
