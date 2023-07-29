import React, { useEffect, useState } from 'react';

import { Pagination, Spin } from 'antd';
import axios from 'axios';

import Card from '../../../../Assets/Components/Card';
import './styles.scss';

function Countries() {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('http://localhost:5173/countries');
      setInfo(data.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setInfo(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="countries-body">
      {info && !loading ? (
        <div className="body-container">
          <Pagination defaultCurrent={1} total={50} />
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
          <Pagination defaultCurrent={1} total={50} />
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
