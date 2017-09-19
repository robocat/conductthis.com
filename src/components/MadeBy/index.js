import React from 'react';
import styled from 'styled-components';

import bear from './northplay.png';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 80px 0 0 0;
`;

const Text = styled.a`
  flex: 1 1 50%;
  align-items: center;
  color: #fff;
  display: flex;
  font-family: "cubano";
  font-size: 30px;
  text-decoration: none;
`;

const LeftText = Text.extend`
  justify-content: flex-end;
`;

const People = styled.span`
  text-align: right;
`;
const Location = styled.span`
  text-align: left;
`;

const Logo = styled.img`
  height: 153px;
  width: 158px;
`;

const Northplay = styled.a`
  flex: 0 1 158px;
  margin: 0 35px;
  
  &:hover {
    opacity: 0.8;
  }
`;

const MadeBy = () => {
  return <Container>
    <LeftText href="https://northplay.co" target="_blank">
      <People>Made by Northplay</People>
    </LeftText>
    <Northplay href="https://northplay.co" target="_blank"><Logo src={bear} alt="Northplay" /></Northplay>
    <Text href="https://northplay.co" target="_blank">
      <Location>In Copenhagen</Location>
    </Text>
  </Container>;
};


export default MadeBy;
