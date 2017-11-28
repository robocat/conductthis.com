import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

const Tagline = styled.div`
  font-family: "cubano";
  flex: 0 1 35%;
  font-size: 42pt;
  line-height: 40pt;
  margin-right: 30px;
  text-align: right;
  
  @media (max-width: 800px) {
    flex: 1 1 100%;
    margin: 0 10px 15px 10px;
    text-align: center;
  }
`;

const Description = styled.div`
  color: ${props => props.descriptionColor};
  flex: 1 1 50%;
  font-size: 22px;
  line-height: 27px;
  margin-left: 30px;
  
  @media (max-width: 800px) {
    flex: 1 1 100%;
    margin: 0 10px;
    text-align: center;
  }
`;

const Info = ({ tagline, description, descriptionColor }) => {
  return <Container>
    <Tagline>{tagline}</Tagline>
    <Description descriptionColor={descriptionColor}>{description}</Description>
  </Container>
};

Info.propTypes = {
  tagline: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  descriptionColor: PropTypes.string.isRequired
};

export default Info;
