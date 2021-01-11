import axios from 'axios';
const url = 'http://54.180.189.240:3000/';
const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InRlc3RlciIsImlhdCI6MTYxMDE3OTg2MywiZXhwIjoxNjEwNzg0NjYzLCJpc3MiOiJsY2cifQ.hkYUZx9REp8ugpkRrf_XUhXC1BDTT7dpToseAYnxM9Y';
const headers = { jwt: accessToken };

export const getCardAPI = async () => {
  try {
    const { data } = await axios.get(`${url}activity/getActivityDate`, {
      headers,
    });
    console.log(`[SUCCESS] GET CARD ACTIVITIES`, data);
    return data.data;
  } catch (e) {
    console.log(`[FAIL] GET CARD ACTIVITIES`, e);
  }
};
