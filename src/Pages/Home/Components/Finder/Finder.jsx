import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import { func, string, arrayOf, shape } from 'prop-types';

import { fetchDataByName } from '../../../../Api';
import './styles.scss';

function Finder({
  setInfo,
  setLoading,
  setBack,
  setIsError,
  setInputValue,
  inputValue,
  options,
  setOptions,
}) {
  const [inputloading, setInputLoading] = useState(false);

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
    setInputLoading(true);
    setInputValue(value);
    const res = await searchResult(value);
    setOptions(value ? res : []);
    setInputLoading(false);
  };

  const onSelect = async (value) => {
    if (!value) return;
    setLoading(true);
    const { results, error } = await fetchDataByName(value);
    if (error && !results) {
      setIsError(true);
      setBack(false);
      setLoading(false);
      setInputValue('');
    } else {
      setIsError(false);
      setInfo(results);
      setBack(true);
      setLoading(false);
    }
  };

  return (
    <div className="finder-container">
      <AutoComplete
        popupMatchSelectWidth={252}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
        className="finder-autocomplete"
        value={inputValue}
      >
        <Input.Search
          size="large"
          placeholder="Which country would you like to know?"
          enterButton
          onSearch={onSelect}
          loading={inputloading}
        />
      </AutoComplete>
    </div>
  );
}
Finder.propTypes = {
  setLoading: func.isRequired,
  setBack: func.isRequired,
  setInfo: func.isRequired,
  setIsError: func.isRequired,
  setInputValue: func.isRequired,
  inputValue: string,
  options: arrayOf(shape({})),
  setOptions: func.isRequired,
};

Finder.defaultProps = {
  inputValue: 'false',
  options: [],
};

export default Finder;
