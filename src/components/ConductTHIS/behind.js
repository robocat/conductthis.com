import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const Container = styled.div`
  margin: 80px 0;
`;

const Videos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-family: "cubano";
  font-size: 22pt;
  margin-bottom: 30px;
`;

const Item = styled(ReactPlayer)`
  background-color: rgba(255, 255, 255, 0.2);
  flex: 0 1 530px;
  height: 296px;
  width: 530px;
  margin-bottom: 20px;
`;

const Behind = () => {
  return <Container>
    <Title>Watch how we made it</Title>
    <Videos>
      <Item url="https://www.youtube.com/watch?v=keUQqc9_8OU" controls={true} width="360" height="296" />
      <Item url="https://www.youtube.com/watch?v=LTW4gOFKwWY" controls={true} width="360" height="296" />
      <Item url="https://www.youtube.com/watch?v=DYTntG4mlmQ" controls={true} width="360" height="296" />
      <Item url="https://www.youtube.com/watch?v=D13SbqOc92A" controls={true} width="360" height="296" />
    </Videos>
  </Container>;
};

export default Behind;
