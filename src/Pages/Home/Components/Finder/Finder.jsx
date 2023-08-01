import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import { func } from 'prop-types';

import { fetchDataByName } from '../../../../Api';
import './styles.scss';

function Finder({ setInfo, setLoading, setBack }) {
  const [options, setOptions] = useState([]);

  const searchResult = async (value, clicked) => {
    const { results } = await fetchDataByName(value);
    if (clicked) {
      setInfo(results);
    }

    return results?.map((res) => ({
      value: `${res.name}`,
      label: (
        <div>
          <span>
            Found <b>{value.toUpperCase()}</b> on {res.name}
          </span>
        </div>
      ),
    }));
  };

  const handleSearch = async (value) => {
    const res = await searchResult(value);
    setOptions(value ? res : []);
  };

  const onSelect = async (value) => {
    setLoading(true);
    const { results } = await fetchDataByName(value);
    setInfo(results);
    setLoading(false);
    setBack(true);
  };

  return (
    <div className="finder-container">
      <AutoComplete
        popupMatchSelectWidth={252}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
        className="finder-autocomplete"
      >
        <Input.Search
          size="large"
          placeholder="What country do you want to visit today?"
          enterButton
        />
      </AutoComplete>
    </div>
  );
}
Finder.propTypes = {
  setLoading: func.isRequired,
  setBack: func.isRequired,
  setInfo: func.isRequired,
};

export default Finder;
