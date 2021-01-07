import axios from 'axios';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InRlc3RlciIsImlhdCI6MTYwOTkxMDgxMywiZXhwIjoxNjA5OTk3MjEzLCJpc3MiOiJsY2cifQ.n9gI3esMfhdi9xt03WUWxZ2NUUdgup-pIEDRXev33-M';
const baseURL = 'http://54.180.189.240:3000/';

export const createActivity = async activity => {
  try {
    const formData = new FormData();
    for (var key in activity) {
      formData.append(key, activity[key]);
    }
    const data = await axios.post(`${baseURL}activity/create`, formData, {
      headers: {
        'Content-type': 'multipart/form-data',
        jwt: token,
      },
    });
    console.log('[SUCCESS] CREATE ACTIVITY', data);
    return data;
  } catch (e) {
    console.log('[FAIL] CREATE ACTIVITY', e);
    throw e;
  }
};
