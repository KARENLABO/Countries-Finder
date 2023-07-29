import React, { useEffect, useState } from 'react';

import { Empty } from 'antd';
import axios from 'axios';

import Card from '../../../../Assets/Components/Card';
import './styles.scss';

function Countries() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('http://localhost:5173/countries');
      setInfo(data.results);
    };

    getData();
  }, []);

  return (
    <div className="countries-body">
      {info ? (
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
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default Countries;
