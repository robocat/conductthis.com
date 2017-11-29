import React from 'react';
import styled from 'styled-components';

import Video from 'components/Video';
import Download from 'components/Download';
import Info from 'components/Info';
import Screenshots from 'components/Screenshots';
import Reviews from 'components/Reviews';
import Social from 'components/Social';

import appIcon from './app-icon.png';

import preview1 from './screen-preview-1.png';
import preview2 from './screen-preview-2.png';
import preview3 from './screen-preview-3.png';
import preview4 from './screen-preview-4.png';
import preview5 from './screen-preview-5.png';

import full1 from './screen-full-1.jpg';
import full2 from './screen-full-2.jpg';
import full3 from './screen-full-3.jpg';
import full4 from './screen-full-4.jpg';
import full5 from './screen-full-5.jpg';

const Coming = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

const ConductAR = () => {
  return <div>
    <Video url="https://www.youtube.com/watch?v=veSWRCsnQqo" />
    <Coming>
      <h1 style={{'font-family': 'Cubano, sans-serif'}}>Coming on December 5th, 2017</h1>
    </Coming>
    <Download 
      appIcon={appIcon} 
      steamStoreUrl="http://store.steampowered.com/app/737870/Conduct_DELUXE/"/>
    <Info
      tagline="The Definitive Railroad Action"
      description={
        <span>
          Conduct DELUXE! is an addictive game of explosive railway action that will challenge your inner conductor. Set in a stunning world, with incredibly simple controls you race against time to bring passengers safely to their destination by commanding trains, switching tracks and avoiding collisions in increasingly challenging action-puzzles.
          <br /><br />
          This is the definitive edition, reimagined for your computer. With all new visuals, content and a level editor!
        </span>
      }
      descriptionColor="#34cdfd" />
    <Screenshots
      images={[
        { preview: preview1, full: full1 },
        { preview: preview2, full: full2 },
        { preview: preview3, full: full3 },
        { preview: preview4, full: full4 },
        { preview: preview5, full: full5 },
      ]} />
      <Reviews reviews={[
        { text: "Transport Tycoon on Red Bull", source: { name: "Apsfera" } },
      ]} />
      <Social presskit="https://www.dropbox.com/s/8jvd4eljdd2qva1/Conduct%20DELUXE%21%20Press%20Kit.zip?dl=1" />
  </div>;
};

export default ConductAR;
