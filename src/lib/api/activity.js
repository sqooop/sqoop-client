import axios from 'axios';
import instance from './instance';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InRlc3RlciIsImlhdCI6MTYwOTk5NzYwNywiZXhwIjoxNjEwNjAyNDA3LCJpc3MiOiJsY2cifQ.9Ua8ekgW9CFKuy6M_0p2drB9fnprPmewZUVSgNH47Hg';
const baseURL = 'http://54.180.189.240:3000/';

export const createActivity = async activity => {
  try {
    const formData = new FormData();
    for (var key in activity) {
      if (key === 'jobTag' || key === 'skillTag') {
        for (let i = 0; i < activity[key].length; i++) {
          formData.append(`${key}[${i}]`, activity[key][i]);
        }
      } else {
        formData.append(key, activity[key]);
      }
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

export const getActivities = async () => {
  try {
    const { data } = await instance.get(`/activity/getAllActivity`);
    console.log('[SUCCESS] GET ACTIVITIES', data.data);
    return data.data;
  } catch (e) {
    console.log('[FAIL] GET ACTIVITIES', e);
    throw e;
  }
};

export const getLikeActivity = async () => {
  try {
    const { data } = await instance.get(`/activity/getLikeActivity`);
    console.log('[SUCCESS] GET LIKE ACTIVITIES', data.data);
    return data.data;
  } catch (e) {
    console.log('[FAIL] GET LIKE ACTIVITIES', e);
    throw e;
  }
};
