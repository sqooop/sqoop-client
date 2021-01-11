import axios from 'axios';
const url = 'http://54.180.189.240:3000/';
const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InRlc3RlciIsImlhdCI6MTYxMDE3OTg2MywiZXhwIjoxNjEwNzg0NjYzLCJpc3MiOiJsY2cifQ.hkYUZx9REp8ugpkRrf_XUhXC1BDTT7dpToseAYnxM9Y';
const headers = { jwt: accessToken };

export const getUserName = async () => {
  try {
    const { data } = await axios.get(`${url}mypage`, {
      headers,
    });
    console.log(`[SUCCESS] GET USER NAME`, data.data);
    return data.data.userName;
  } catch (e) {
    console.log(`[FAIL] GET USER NAME`, e);
  }
};
