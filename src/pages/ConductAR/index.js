import React from 'react';
import styled from 'styled-components';

import Content from 'components/ConductAR';
import Container from 'components/Container';
import MadeBy from 'components/MadeBy';
import JoinTheClub from 'components/JoinTheClub';

import gradient from './background-gradient.png';

const StyledWrapper = styled.div`
  background-repeat: repeat-x;
  background-size: 1px 601px;
  background-position: bottom center;
  background-image: url(${gradient});
  width: 100%;
`;

const ConductAR = () => {
  return <StyledWrapper>
    <Container>
      <Content />
      <JoinTheClub />
      <MadeBy />
    </Container>
  </StyledWrapper>;
};

export default ConductAR;
