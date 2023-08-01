import React from 'react';

import { Pagination, Spin } from 'antd';
import { shape, arrayOf, string, bool, func, number } from 'prop-types';

import Card from '../../../../Assets/Components/Card';
import './styles.scss';

function Countries({ info, loading, currentPage, bringData }) {
  return (
    <div className="countries-body">
      {info && !loading ? (
        <div className="body-container">
          <div className="countries-container">
            {info?.map((country) => (
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

Countries.propTypes = {
  info: arrayOf(
    shape({
      name: string.isRequired,
      flag_1x1: string.isRequired,
      capital: string,
    }),
  ),
  loading: bool.isRequired,
  currentPage: number.isRequired,
  bringData: func.isRequired,
};

Countries.defaultProps = {
  info: {
    capital: '',
  },
};

export default Countries;
