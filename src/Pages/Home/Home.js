import React from 'react';
import GitHub from '../../Assets/Icons/github.svg';
import Instagram from '../../Assets/Icons/instagram.svg';
import Linkedin from '../../Assets/Icons/linkedin.svg';
import Spotify from '../../Assets/Icons/spotify.svg';
import Portrait from '../../Assets/portrait.jpg';
import { Page } from '../../Components/Common/Page';
import './styles.scss';

function Home() {

  return (
    <Page>
      <div className='home__sidebar center-vertical'>
        <div className='home__sidebar-portrait-wrap center-horizontal'>
          <img
            className='home__sidebar-portrait'
            src={Portrait}
            alt='portrait'
          />
        </div>
        <div className='home__sidebar-title center-horizontal'>
          Engineer.<br/>
          Husband.<br/>
          Christian<br/>
          & Friend.
          </div>
        <div className='home__sidebar-intro center-horizontal'>
          Software engineer at F9 Teams supporting the Air Force's Kessel Run program. Happily married to my incredible wife Veronika. Striving to live a faithful and full life.
        </div>
        <div className='home__sidebar-social-links center-horizontal'>
          <a href='https://www.linkedin.com/in/renbeynolds/'><img src={Linkedin} alt='Linkedin' /></a>
          <a href='https://github.com/renbeynolds'><img src={GitHub} alt='GitHub' /></a>
          <a href='https://www.instagram.com/ben_reynolds2/'><img src={Instagram} alt='Instagram' /></a>
          <a href='https://open.spotify.com/user/1296908115?si=l_U1w8HDRl6vjd0afGrM4A'><img src={Spotify} alt='Spotify' /></a>
        </div>
      </div>
      <div className='home__panel-wrap'>
        <div className='home__panel center-vertical'>
          <div className='center-horizontal'>
            <div className='home__panel-title'>Kodenames</div>
          </div>
          <div className='center-horizontal'>
            <div className='home__panel-subtitle'>Word association game where two teams compete to outwit one another with one-word clues.</div>
          </div>
        </div>
        <div className='home__panel'>
        </div>
        <div className='home__panel'>
        </div>
      </div>
    </Page>
  );

}

export default Home;