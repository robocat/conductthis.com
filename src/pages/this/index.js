import React from 'react';
import styled from 'styled-components';

import Content from 'components/ConductTHIS';
import Container from 'components/Container';
import MadeBy from 'components/MadeBy';
import JoinTheClub from 'components/JoinTheClub';
import Community from 'components/Community';

import gradient from './gradient-this.jpg';

const StyledWrapper = styled.div`
  background: #101b05;
  width: 100%;
`;

const ConductTHIS = () => {
  return <StyledWrapper>
    <Container>
      <Content />
      <Community />
      <JoinTheClub />
    </Container>
    <MadeBy gradient={gradient} />
  </StyledWrapper>;
};

export default ConductTHIS;
