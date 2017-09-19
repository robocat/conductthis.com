import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 100px 0 100px 0;
  
  @media (max-width: 1100px) {
    margin: 0 10px;
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
