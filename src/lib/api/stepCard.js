import axios from 'axios';

const baseURL = 'http://54.180.189.240:3000/';
const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InRlc3RlciIsImlhdCI6MTYxMDE3OTg2MywiZXhwIjoxNjEwNzg0NjYzLCJpc3MiOiJsY2cifQ.hkYUZx9REp8ugpkRrf_XUhXC1BDTT7dpToseAYnxM9Y';

const headers = { jwt: accessToken };

export const getActivityName = async id => {
  try {
    const { data } = await axios.get(
      `${baseURL}activity/getOneActivity/${id}`,
      { headers },
    );
    console.log('[SUCCESS] GET ACTIVITY NAME');
    return data.data.selectedActivity.title;
  } catch (error) {
    console.log('[FAIL] GET ACTIVITY NAME', error);
  }
};

export const getCardInfo = async id => {
  try {
    const { data } = await axios.get(`${baseURL}card/${id}`, { headers });
    console.log('[SUCCESS] GET Card Info');
    return data.data;
  } catch (error) {
    console.log('[FAIL] GET Card Info', error);
  }
};

export const createCard = async card => {
  try {
    const { data } = await axios.post(`${baseURL}card/create`, card, {
      headers,
    });
    console.log('[SUCCESS] CREATE CARD', data.data);
    return data.data;
  } catch (error) {
    console.log('[FAIL] CREATE CARD', error);
  }
};

export const updateCard = async card => {
  try {
    const { data } = await axios.put(`${baseURL}card/update`, card, {
      headers,
    });
    console.log('[SUCCESS] UPDATE CARD', data.data);
  } catch (error) {
    console.log('[FAIL} UPDATE CARD', error);
  }
};
