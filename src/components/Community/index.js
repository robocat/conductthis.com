import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #1e2124;
  border-radius: 25px;
  padding: 40px 40px 80px 40px;
  margin-top: 20px 0 40px 0;
  z-index: 20;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.div`
  flex: 1 1 100%;
  font-size: 32pt;
  font-weight: bold;
  line-height: 32pt;
  margin-bottom: 40px;
  color: #fff;
`;

const Column = styled.div`
  display: flex;
  flex: 1 1 100%;
  justify-content: space-between;
  
  @media (max-width: 1080px) {
    flex-wrap: wrap;
  }
`;

const Embed = styled.div`
  flex: 0 1 45%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  
  &:first-child {
    margin-bottom: 40px;
  }
  
  @media (max-width: 1080px) {
    flex: 1 1 100%;
    
    iframe {
      width: 100% !important;
    }
  }
`;

const Community = () => {
  return <Wrapper>
    <Container>
      <Column><Title>Join the Community</Title></Column>
      <Column>
        <Embed>
          <iframe 
            title="Discord" 
            src="https://discordapp.com/widget?id=379632686857322499&theme=dark" 
            width="480" 
            height="500" 
            allowTransparency="true" 
            frameBorder="0" />
        </Embed>
        <Embed>
          <iframe 
            title="Conduct THIS on Facebook" 
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fconductthis&tabs=timeline&width=480&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=308932812944147" 
            width="480" 
            height="500" 
            style={{border: 'none', overflow: 'hidden', width: '100% !important'}}
            frameBorder="0"
            scrolling="no"
            allowTransparency="true" />
        </Embed>
      </Column>
    </Container>
  </Wrapper>
};

export default Community;
