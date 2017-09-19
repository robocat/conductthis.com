import React from 'react';
import styled from 'styled-components';

import Content from 'components/ConductTHIS';
import Container from 'components/Container';
import MadeBy from 'components/MadeBy';
import JoinTheClub from 'components/JoinTheClub';

import background from './background.jpg';

const StyledWrapper = styled.div`
  background-image: url(${background});
  background-position: top center;
  background-repeat: no-repeat;
  background-color: #213967;
  width: 100%;
`;

const ConductTHIS = () => {
  return <StyledWrapper>
    <Container>
      <Content />
      <JoinTheClub />
      <MadeBy />
    </Container>
  </StyledWrapper>;
};

export default ConductTHIS;
