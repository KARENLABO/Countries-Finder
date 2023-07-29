import React from 'react';
import { Search } from '../../../../Assets/Svg';
import './styles.scss';

function Finder() {
  return (
    <div className="finder-container">
      <input
        type="text"
        className="search-input"
        placeholder="Type to search"
      />
      <button type="submit" className="search-icon-container">
        <img src={Search} alt="search-icon" className="search-icon" />
      </button>
    </div>
  );
}

export default Finder;
