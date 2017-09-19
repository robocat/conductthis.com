import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


import playStoreImage from './play.png';
import appStoreImage from './appstore.png';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

const StoreButtonContainer = styled.div`
  flex: 1 1 50%;
  align-items: center;
  display: flex;
`;

const AppStoreContainer = StoreButtonContainer.extend`
  justify-content: flex-start;
`;
const PlayStoreContainer = StoreButtonContainer.extend`
  justify-content: flex-end;
`;

const StoreButton = styled.a`
  background-repeat: no-repeat;
  background-image: url(${props => props.image});
  background-size: 256px 80px;
  background-position: center center;
  display: block;
  height: 80px;
  width: 256px;
`;

const AppIcon = styled.img`
  flex: 0 0 130px;
  height: 130px;
  width: 130px;
  margin: 0 25px;
`

const Download = ({ playStoreUrl, appStoreUrl, appIcon }) => {
  return <Container>
    <PlayStoreContainer>
      {playStoreUrl && <StoreButton href={playStoreUrl} image={playStoreImage} target="_blank" />}
    </PlayStoreContainer>
    <AppIcon src={appIcon} alt="App Icon" />
    <AppStoreContainer>
      {appStoreUrl && <StoreButton href={appStoreUrl} image={appStoreImage} target="_blank" />}
    </AppStoreContainer>
    
  </Container>;
};

Download.propTypes = {
  appStoreUrl: PropTypes.string,
  playStoreUrl: PropTypes.string,
  appIcon: PropTypes.string.isRequired,
};

export default Download;
