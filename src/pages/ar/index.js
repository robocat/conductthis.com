import React from 'react';
import styled from 'styled-components';

import Content from 'components/ConductAR';
import Container from 'components/Container';
import MadeBy from 'components/MadeBy';
import JoinTheClub from 'components/JoinTheClub';
import Community from 'components/Community';

import gradient from './gradient-ar.jpg';

const StyledWrapper = styled.div`
  background: #240e00;
  width: 100%;
`;

const ConductDeluxe = () => {
  return <StyledWrapper>
    <Container>
      <Content />
      <Community />
      <JoinTheClub />
    </Container>
    <MadeBy gradient={gradient} />
  </StyledWrapper>;
};

export default ConductDeluxe;
