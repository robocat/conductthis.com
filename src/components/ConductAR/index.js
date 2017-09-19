import React from 'react';

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

const ConductAR = () => {
  return <div>
    <Video url="https://www.youtube.com/watch?v=qECJSCVyx8I" />
    <Download 
      appIcon={appIcon} 
      appStoreUrl="https://itunes.apple.com/us/app/conduct-ar/id1256506674?ls=1&mt=8&at=1010lwVg&ct=conductthis-site" />
    <Info
      tagline="Explosive Augmented Reality Action"
      description={
        <span>
          Conduct AR! is an epic augmented reality game of explosive railway action. Set in the old west you journey through diorama worlds that unfold right in front of you.
          <br /><br />
          Commanding trains, switching tracks and avoiding collisions, playing out in reality on the table in front of you. Look over and around landscapes, solve spatial puzzles and keep the situation under control to become the ultimate conductor in the Wild West.
        </span>
      }
      descriptionColor="#fdeaa3" />
    <Screenshots
      images={[
        { preview: preview1, full: full1 },
        { preview: preview2, full: full2 },
        { preview: preview3, full: full3 },
        { preview: preview4, full: full4 },
        { preview: preview5, full: full5 },
      ]} />
      <Reviews reviews={[
      ]} />
      <Social presskit="/conduct-ar-presskit.zip" />
  </div>;
};

export default ConductAR;
