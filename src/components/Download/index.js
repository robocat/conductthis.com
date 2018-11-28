import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import masStoreImage from "./appstore.png";
import playStoreImage from "./play.png";
import appStoreImage from "./appstore.png";
import steamStoreImage from "./steam.png";
import switchStoreImage from "./eshop.png";

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
  background-size: contain;
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
`;

const Available = styled.div`
  flex: 1 1 auto;
  color: #fff54f;
  font-family: "cubano";
  font-size: 24px;
  line-height: 30px;
`;

const Download = ({
  masStoreUrl,
  playStoreUrl,
  appStoreUrl,
  steamStoreUrl,
  switchStoreUrl,
  appIcon,
  available
}) => {
  return (
    <Container>
      {available && <Available>{available}</Available>}
      {appIcon && <AppIcon src={appIcon} alt="App Icon" />}
      {masStoreUrl && (
        <StoreButton href={masStoreUrl} image={masStoreImage} target="_blank" />
      )}
      {playStoreUrl && (
        <StoreButton
          href={playStoreUrl}
          image={playStoreImage}
          target="_blank"
        />
      )}
      {appStoreUrl && (
        <StoreButton href={appStoreUrl} image={appStoreImage} target="_blank" />
      )}
      {steamStoreUrl && (
        <StoreButton
          href={steamStoreUrl}
          image={steamStoreImage}
          target="_blank"
        />
      )}
      {switchStoreUrl && (
        <StoreButton
          href={switchStoreUrl}
          image={switchStoreImage}
          target="_blank"
        />
      )}
    </Container>
  );
};

Download.propTypes = {
  masStoreUrl: PropTypes.string,
  appStoreUrl: PropTypes.string,
  playStoreUrl: PropTypes.string,
  steamStoreUrl: PropTypes.string,
  switchStoreUrl: PropTypes.string,
  appIcon: PropTypes.string
};

Download.defaultProps = {
  appIcon: null
};

export default Download;
