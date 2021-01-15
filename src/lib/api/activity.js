import axios from 'axios';
import instance from './instance';
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
    const { data } = await axios.post(`${baseURL}activity/create`, formData, {
      headers: {
        'Content-type': 'multipart/form-data',
        jwt: localStorage.getItem('token'),
      },
    });
    console.log('[SUCCESS] CREATE ACTIVITY', data);
    return data.data.newActivity.id;
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

export const getWritingActivity = async () => {
  try {
    const { data } = await instance.get(`/activity/getAllIncompleteActivity`);
    console.log('[SUCCESS] GET WRITING ACTIVITIES', data.data);
    return data.data;
  } catch (e) {
    console.log('[FAIL] GET WRITING ACTIVITIES', e);
    throw e;
  }
};

export const deleteActivity = async activityId => {
  try {
    const { data } = await instance.delete(`/activity/delete/${activityId}`);
    console.log('[SUCCESS] DELETE ACTIVITY', data.data);
    return data.data;
  } catch (e) {
    console.log('[FAIL] DELETE ACTIVITY', e);
    throw e;
  }
};
export const likeActivity = async activityId => {
  try {
    const { data } = await instance.put(`/activity/likeActivity/${activityId}`);
    console.log('[SUCCESS] LIKE ACTIVITY', data.data);
    return data.data;
  } catch (e) {
    console.log('[FAIL] LIKE ACTIVITY', e);
    throw e;
  }
};

export const getFilterActivity = async filter => {
  try {
    const { jobTag, skillTag, endDate, startDate } = filter;
    const { data } = await instance.get(
      `/activity/getRangeActivity?startDate=${startDate}&endDate=${endDate}&${jobTag
        .map((tag, index) => `jobTag[${index}]=${tag.replace('#', '%23')}`)
        .join('&')}&${skillTag
        .map((tag, index) => `skillTag[${index}]=${tag.replace('#', '%23')}`)
        .join('&')}`,
    );
    console.log('[SUCCESS] GET WRITING ACTIVITIES', data.data);
    return data.data;
  } catch (e) {
    console.log('[FAIL] GET WRITING ACTIVITIES', e);
    throw e;
  }
};
