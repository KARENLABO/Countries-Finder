import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { func } from 'prop-types';
import { Button } from 'antd';
import { Wrong, Restart } from '../../Svg';

import './styles.scss';

function Error({ bringData }) {
  return (
    <div className="error-container">
      <div className="wrong-icon-container">
        <img src={Wrong} alt="wrong-icon" className="wrong-icon" />
      </div>
      <div>
        <h2>Something went wrong </h2>
        <h2> Please try again</h2>
      </div>

      <Button
        className="restart-button"
        shape="circle"
        onClick={() => {
          bringData(1);
        }}
      >
        <div className="button-image">
          <img className="restart-icon" src={Restart} alt="back-icon" />
        </div>
      </Button>
    </div>
  );
}

Error.propTypes = {
  bringData: func.isRequired,
};

export default Error;
