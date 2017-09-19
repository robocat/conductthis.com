import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const VideoContainer = styled.div`
  height: 0;
  overflow: hidden;
  padding-bottom: 56.25%;
  padding-top: 30px;
  position: relative;
`;

const VideoEmbed = styled(ReactPlayer)`
  left: 0;
  height: 100% !important;
  position: absolute;
  top: 0;
  width: 100% !important;
`;

const Video = ({ url }) => {
  return <VideoContainer>
    <VideoEmbed url={url} controls={true} />
  </VideoContainer>;
};

Video.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Video;
