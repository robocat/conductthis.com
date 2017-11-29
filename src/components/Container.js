import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 50px 0 50px 0;
  
  @media (max-width: 1100px) {
    margin: 0 10px;
  }
  
  @media (max-width: 820px) {
    padding-top: 0;
  }
`;

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

export default Container;
