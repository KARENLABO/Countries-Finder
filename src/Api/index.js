import axios from 'axios';

export const fetchDataByName = async (value) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5173/countries?query=${value}`,
    );
    return data;
  } catch (err) {
    return err;
  }
};

export const fetchDataByPage = async (page) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5173/countries?page=${page}`,
    );
    return data;
  } catch (err) {
    return err;
  }
};
