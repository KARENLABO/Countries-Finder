import React from 'react';

import { Logo } from '../../Assets/Svg';
import Finder from './Components/Finder';
import Countries from './Components/Countries';
import './styles.scss';

function Home() {
  return (
    <div className="home-container">
      <div className="top">
        <img src={Logo} alt="company-logo" className="logo" />
        <Finder />
      </div>

      <div className="body">
        <Countries />
      </div>
    </div>
  );
}

export default Home;
