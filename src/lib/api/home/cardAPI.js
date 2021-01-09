import axios from 'axios';
const url = 'http://localhost:8080/';

const getCardAPI = async () => {
  try {
    const { data } = await axios.get(`${url}`);
    console.log(`[SUCCESS] GET CARD ACTIVITIES`, data);
    return data.data;
  } catch (e) {
    console.log.err(`[FAIL] GET CARD ACTIVITES`, e);
  }
};

export { getCardAPI };
