import React, { useEffect, useState } from 'react';

import { fetchDataByPage } from '../../Api';
import { Logo } from '../../Assets/Svg';
import { Error as ErrorHandler } from '../../Assets/Components';
import Countries from './Components/Countries';
import Finder from './Components/Finder';
import './styles.scss';

function Home() {
  const [info, setInfo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [back, setBack] = useState(false);
  const [isError, setIsError] = useState(false);

  const bringData = async (page) => {
    setCurrentPage(page);
    setLoading(true);
    const { results, error } = await fetchDataByPage(page);
    if (error && !results) {
      setIsError(true);
      setLoading(false);
      setBack(false);
    } else {
      setIsError(false);
      setInfo(results);
      setLoading(false);
      setBack(false);
    }
  };

  useEffect(() => {
    bringData(1);
  }, []);

  return (
    <div>
      {isError ? (
        <div className="home-container">
          <ErrorHandler bringData={bringData} />
        </div>
      ) : (
        <div className="home-container">
          <div className="top">
            <img src={Logo} alt="company-logo" className="logo" />
            <Finder
              info={info}
              setInfo={setInfo}
              setLoading={setLoading}
              setBack={setBack}
              setIsError={setIsError}
            />
          </div>
          <div className="body">
            <Countries
              info={info}
              loading={loading}
              setInfo={setInfo}
              currentPage={currentPage}
              bringData={bringData}
              back={back}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
