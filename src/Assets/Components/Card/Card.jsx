import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { string } from 'prop-types';

import './styles.scss';

function Card({ image, title, subtitle }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img className="image" src={image} alt={`imag-${title}`} />
      </div>
      <div className="text-container">
        <h3 className="title">{title}</h3>
        <h4 className="sub-title">{subtitle ? `( ${subtitle} )` : ''}</h4>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  subtitle: string,
};

Card.defaultProps = {
  subtitle: '',
};

export default Card;
