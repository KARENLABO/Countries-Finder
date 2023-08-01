import React, { useEffect, useState } from 'react';

import { Pagination, Spin } from 'antd';
import Finder from '../Finder';

import { fetchDataByPage } from '../../../../Api';
import Card from '../../../../Assets/Components/Card';
import './styles.scss';

function Countries() {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

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
    <div className="countries-body">
      <Finder info={info} setInfo={setInfo} />
      {info && !loading ? (
        <div className="body-container">
          <Pagination
            current={currentPage}
            defaultCurrent={1}
            total={270}
            pageSize={10}
            onChange={bringData}
            showSizeChanger={false}
          />
          <div className="countries-container">
            {info.map((country) => (
              <Card
                key={country.name}
                image={country.flag_1x1}
                title={country.name}
                subtitle={country.capital}
              />
            ))}
          </div>
          {info?.length > 8 && (
            <Pagination
              current={currentPage}
              defaultCurrent={1}
              total={270}
              pageSize={10}
              onChange={bringData}
              showSizeChanger={false}
            />
          )}
        </div>
      ) : (
        <div>
          <Spin size="large" />
          <p className="loading-text">Loading...</p>
        </div>
      )}
    </div>
  );
}

export default Countries;
