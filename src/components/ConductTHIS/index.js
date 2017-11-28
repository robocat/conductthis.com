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
    <Video url="https://www.youtube.com/watch?v=FOqkdoZgX8s" />
    <Download 
      appIcon={appIcon} 
      appStoreUrl="https://itunes.apple.com/us/app/conduct-this/id1151455384?ls=1&mt=8&at=1010lwVg&ct=conductthis-site"
      playStoreUrl="https://play.google.com/store/apps/details?id=co.northplay.ConductTHIS" />
    <Info
      tagline="A Game of Explosive Railroad Action"
      description={
        <span>
          Set in a stunning world, with incredibly simple controls you race against time to bring passengers safely to their destination by commanding trains, switching tracks and avoiding collisions in increasingly challenging action-puzzles.
          <br /><br />
          As you progress you unlock new trains, gain access to new beautiful and mysterious regions and earn awards in an addictive journey to the far reaches of this little world.
        </span>
      }
      descriptionColor="#edff76" />
    <Screenshots
      images={[
        { preview: preview1, full: full1 },
        { preview: preview2, full: full2 },
        { preview: preview3, full: full3 },
        { preview: preview4, full: full4 },
        { preview: preview5, full: full5 },
      ]} />
      <Reviews reviews={[
        { text: "We love this challenging puzzle game", source: { name: "Apple", url: "https://itunes.apple.com/us/app/conduct-this/id1151455384?ls=1&mt=8&at=1010lwVg&ct=conductthis-site" } },
        { text: "The low-poly visuals are gorgeous, the music is incredibly well done, and the puzzles themselves are clever and challenging", source: { name: "AppAdvice", url: "https://appadvice.com/review/conduct-this" } },
        { text: "Conduct THIS! is one of the fresh breaths of air and originality that the App Store needs from time to time", source: { name: "Appsfera", url: "https://www.applesfera.com/juegos-ios/conduct-this-un-simulador-de-trenes-simple-pero-que-es-todo-un-desafio-app-de-la-semana" } },
        { text: "Conduct This is a gorgeous-challenging game of skill, what feels like such a Transport Tycoon on Red Bull", source: { name: "Check App", url: "http://www.check-app.de/2016/12/31/app-tipp-nicht-nur-fuer-eisenbahnfans-conduct-this/" } },
      ]} />
      <Social presskit="https://www.dropbox.com/s/cek4psxaxhaykp1/conduct-this-presskit.zip?dl=1" />
  </div>;
};

export default ConductAR;
