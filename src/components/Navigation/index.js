import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { routerMatch } from 'utilities/prop-types';

import ctActive from './ct-active.png';
import ctInactive from './ct-inactive.png';
import ctGradient from './gradient-this.jpg';
import caActive from './ca-active.png';
import caInactive from './ca-inactive.png';
import caGradient from './gradient-ar.jpg';
import cdActive from './cd-active.png';
import cdInactive from './cd-inactive.png';
import cdGradient from './gradient-deluxe.jpg';

import platformApple from './platform-iosmac.png';
import platformAndroid from './platform-android.png';
import platformWindows from './platform-windows.png';
import platformSteam from './platform-steam.png';

const platformImages = {
  'ios': platformApple,
  'tvos': platformApple,
  'mac': platformApple,
  'android': platformAndroid,
  'windows': platformWindows,
  'steam': platformSteam
};

const Item = styled(Link)`
  align-items: center;
  color: ${props => props.isActive ? '#fff' : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  display: flex;
  flex: 1 1 33.3%;
  flex-direction: column;
  font-family: "cubano";
  font-size: 13pt;
  line-height: 2.6em;
  justify-content: center;
  margin-right: 20px;
  text-decoration: none;
  
  div {
    transition: transform 0.25s ease;
  }
  
  &:hover > div {
    transform: scale(1.1, 1.1) translateY(10px);
  }
  
  &:hover > :nth-child(2), &:hover > :last-child {
    transform: translateY(20px);
  }
  
  & > :last-child {
    opacity: ${props => props.isActive ? 1 : 0.3};
  }
  
  @media (max-width: 820px) {
    flex: 0 1 25%;
    margin: 0 0 20px 0;
    
    & > div {
      transform: scale(1.1, 1.1) translateY(10px);
    }
    
    &:hover > div, &:hover > :nth-child(2), &:hover > :last-child {
      transform: none;
    }
    
    & > :nth-child(2) {
      display: none;
    }
    
    & > :last-child {
      transform: scale(0.8, 0.8);
      margin-top: -15px;
    }
  }
`;

const Logo = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  background-image: url(${props => props.image});
  transition: background 0.25s ease, transform 0.25s ease;
  flex: 0 1 96px;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1080px;
  margin: 0 auto;
  padding: 35px 0;
  justify-content: space-around;

  @media (max-width: 1100px) {
    margin: 0 10px;
  }
  
  @media (max-width: 820px) {
    flex-wrap: wrap;
  }
`;

const Container = styled.div`
  background-color: ${props => props.background.color};
  background-image: url(${props => props.background.image});
  background-repeat: repeat-x;
  background-position: top left;
  background-size: 1px 200px;
  transition: background 0.25s ease;
  
  ${'' /* @media (max-width: 820px) {
    overflow-x: hidden;
    position: relative;
    height: 250px;
  } */}
`;

const NavigationItem = ({location, path, activeImage, inactiveImage, tagline, platforms}) => {
  const isActive = location.pathname === path;
  return <Item to={path} isActive={isActive}>
    <Logo image={isActive ? activeImage : inactiveImage} />
    <div>{tagline}</div>
    <Platforms platforms={platforms} />
  </Item>;
};

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Platform = styled.div`
  display: block;
  width: 20px;
  height: 33px;
  flex: 0 0 20px;
  margin: 0 5px;
  background-image: url(${props => platformImages[props.platform]});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  transition: opacity 0.25s ease;
`

Platform.propTypes = {
  platform: PropTypes.string.isRequired,
};

const Platforms = ({platforms}) => {
  return <List>
    {platforms.map(platform => 
      <Platform key={platform} platform={platform} />
    )}
  </List>
};

Platforms.propTypes = {
  platforms: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Navigation = ({ match, location }) => {
  const background = {
    '/': {color: '#141519', image: cdGradient},
    '/ar': {color: '#240e00', image: caGradient},
    '/this': {color: '#101b05', image: ctGradient},
    '/deluxe': {color: '#141519', image: cdGradient},
    '/privacy': {color: '#000', image: null},
  };
  
  return <Container background={background[location.pathname]}>
    <Wrapper>
      <NavigationItem
          path="/this"
          platforms={['ios', 'android']}
          tagline="The mobile sensation"
          activeImage={ctActive}
          inactiveImage={ctInactive}
          location={location} />
      <NavigationItem
          path="/ar"
          platforms={['ios']}
          tagline="The augmented reality ride"
          activeImage={caActive}
          inactiveImage={caInactive}
          location={location} />
      <NavigationItem
          path="/deluxe"
          platforms={['steam', 'windows', 'mac']}
          tagline="The definitive PC experience"
          activeImage={cdActive}
          inactiveImage={cdInactive}
          location={location} />
    </Wrapper>
  </Container>;
};

Navigation.propTypes = {
  match: routerMatch.isRequired,
};

export default Navigation;
