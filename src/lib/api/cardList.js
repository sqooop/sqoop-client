import axios from 'axios';
import client from './client';
const url = 'https://sqoop.ga/';

const getCard = async () => {
  try {
    const { data } = await axios.get(`${url}`);
    // console.log(`[SUCCESS] GET CARD ACTIVITIES`, data);
    return data.data;
  } catch (e) {
    // console.log.err(`[FAIL] GET CARD ACTIVITES`, e);
  }
};

export { getCard };
export const readCard = id => client.get(`api/activity/getActivityDate`);
