import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { routerMatch } from 'utilities/prop-types';

import ctActive from './ct-active.png';
import ctInactive from './ct-inactive.png';
import caActive from './ca-active.png';
import caInactive from './ca-inactive.png';

const Item = styled(Link)`
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.isActive ? props.activeImage : props.inactiveImage});
  cursor: pointer;
  display: flex;
  flex: 1 1 166px;
  justify-content: center;
  height: 72px;
  margin-right: 20px;
  width: 166px;
  
  &:last-child {
    margin-right: 0;
  }
  
  @media (max-width: 420px) {
    background-size: 166px 72px;
    background-position: center center;
    flex: 1 1 100%;
    margin: 0 0 30px 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1080px;
  margin: 0 auto;
  padding: 25px 0;

  @media (max-width: 1100px) {
    margin: 0 10px;
  }
  
  @media (max-width: 420px) {
    flex-wrap: wrap;
    
  }
`;

const Container = styled.div`
  background-color: #111010;;
`

const Navigation = ({ match, location }) => {
  const isAR = match.isExact || location.pathname === '/conduct-ar';
  
  return <Container>
    <Wrapper>
      <Item 
        to="/conduct-this" 
        activeImage={ctActive}
        inactiveImage={ctInactive}
        isActive={!isAR} />
      <Item 
        to="/" 
        activeImage={caActive}
        inactiveImage={caInactive}
        isActive={isAR} />
    </Wrapper>
  </Container>;
};

Navigation.propTypes = {
  match: routerMatch.isRequired,
};

export default Navigation;
