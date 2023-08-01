import React, { useEffect, useState } from 'react';

import { fetchDataByPage } from '../../Api';
import { Logo } from '../../Assets/Svg';
import Countries from './Components/Countries';
import Finder from './Components/Finder';
import './styles.scss';

function Home() {
  const [info, setInfo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const bringData = async (page) => {
    setCurrentPage(page);
    setLoading(true);
    const { results } = await fetchDataByPage(page);
    setInfo(results);
    setLoading(false);
  };

  useEffect(() => {
    bringData(1);
  }, []);

  return (
    <div className="home-container">
      <div className="top">
        <img src={Logo} alt="company-logo" className="logo" />
        <Finder info={info} setInfo={setInfo} />
      </div>
      <div className="body">
        <Countries
          info={info}
          loading={loading}
          setInfo={setInfo}
          currentPage={currentPage}
          bringData={bringData}
        />
      </div>
    </div>
  );
}

export default Home;
