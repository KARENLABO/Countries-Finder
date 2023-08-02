import React from 'react';

import { Pagination, Spin, Button } from 'antd';
import { shape, arrayOf, string, bool, func, number } from 'prop-types';
import { Back as backIcon } from '../../../../Assets/Svg';
import { Card } from '../../../../Assets/Components';
import './styles.scss';

function Countries({ info, loading, currentPage, bringData, back }) {
  return (
    <div className="countries-body">
      {info && !loading && (
        <div className="body-container">
          {back && (
            <Button
              type="primary"
              loading={loading}
              ghost
              onClick={() => {
                bringData(1);
              }}
              className="back-button"
            >
              <div>
                <img className="back-icon" src={backIcon} alt="back-icon" />
              </div>
              Go back
            </Button>
          )}
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

          <Pagination
            current={currentPage}
            defaultCurrent={1}
            total={270}
            pageSize={10}
            onChange={bringData}
            showSizeChanger={false}
          />
        </div>
      )}

      {loading && (
        <div>
          <Spin size="large" tip="Loading...">
            <div className="content" />
          </Spin>
        </div>
      )}
    </div>
  );
}

Countries.propTypes = {
  back: bool,
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
  back: false,
  info: {
    capital: '',
  },
};

export default Countries;
