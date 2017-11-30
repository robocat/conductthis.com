import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import playStoreImage from './play.png';
import appStoreImage from './appstore.png';
import steamStoreImage from './wishlist.png';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin: 30px 0;
  
  @media (max-width: 720px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const StoreButton = styled.a`
  background-repeat: no-repeat;
  background-image: url(${props => props.image});
  background-size: 256px 80px;
  background-position: center center;
  display: block;
  height: 80px;
  width: 256px;
  margin-left: 25px;
  transition: all 0.15s ease;
  
  @media (max-width: 720px) {
    margin: 0 0 25px 0;
  }
  
  &:hover {
    transform: scale(1.1, 1.1) translateY(-5px);
  }
`;

const AppIcon = styled.img`
  flex: 0 0 130px;
  height: 130px;
  width: 130px;
  
  @media (max-width: 720px) {
    display: none;
  }
`

const Download = ({ playStoreUrl, appStoreUrl, steamStoreUrl, appIcon }) => {
  return <Container>
    <AppIcon src={appIcon} alt="App Icon" />
    {playStoreUrl && <StoreButton href={playStoreUrl} image={playStoreImage} target="_blank" />}
    {appStoreUrl && <StoreButton href={appStoreUrl} image={appStoreImage} target="_blank" />}
    {steamStoreUrl && <StoreButton href={steamStoreUrl} image={steamStoreImage} target="_blank" />}
  </Container>;
};

Download.propTypes = {
  appStoreUrl: PropTypes.string,
  playStoreUrl: PropTypes.string,
  steamStoreUrl: PropTypes.string,
  appIcon: PropTypes.string.isRequired,
};

export default Download;
