import axios from 'axios';
import instance from './instance';
const baseURL = 'https://sqoop.ga/';

export const signin = async ({ email, password }) => {
  return await instance.post(`/user/signin`, {
    email,
    password,
  });
};
export const checkPhone = async ({ phone }) => {
  try {
    const { data } = await instance.get(`/user/checkPhone?phone=${phone}`);
    // console.log('[SUCCESS] GET checkPhone', data.data);
    return data.data;
  } catch (e) {
    // console.log('[FAIL] GET ACTIVITIES', e);
    throw e;
  }
};
export const checkEmail = async ({ email }) => {
  try {
    const { data } = await instance.get(`/user/checkEmail?email=${email}`);
    // console.log('[SUCCESS] GET checkEmail', data.data);
    return data.data;
  } catch (e) {
    // console.log('[FAIL] GET ACTIVITIES', e);
    throw e;
  }
};
export const signup = async ({
  email,
  userName,
  password,
  birthday,
  phoneNumber,
}) => {
  return await instance.post(`/user/signup`, {
    email,
    userName,
    password,
    birthday,
    phoneNumber,
  });
};
export const findEmail = async ({ userName, birthday, phoneNumber }) => {
  try {
    const { data } = await instance.get(
      `/user/findEmail?userName=${userName}&birthday=${birthday}&phoneNumber=${phoneNumber}`,
    );
    console.log('[SUCCESS] GET checkEmail', data.data);
    return data.data;
  } catch (e) {
    // console.log('[FAIL] GET ACTIVITIES', e);
    throw e;
  }
};
export const resetPassword = async email => {
  return await axios.post(`${baseURL}user/resetPassword`, {
    email,
  });
};
export const changePassword = async ({ inputPW, newPW }) => {
  return await axios.post(
    `${baseURL}user/changePassword`,
    {
      inputPW,
      newPW,
    },
    {
      headers: {
        jwt: localStorage.getItem('token'),
      },
    },
  );
};
export const getUserSetting = async () => {
  try {
    const { data } = await instance.get(`/user/getUserSetting`);
    console.log('[SUCCESS] GET getUserSetting', data.data);
    return data.data;
  } catch (e) {
    console.log('[FAIL] GET ACTIVITIES', e);
    throw e;
  }
};
export const changeMarketing = async ({ checkMarketing }) => {
  return await axios.post(
    `${baseURL}user/setMarketing`,
    {
      checkMarketing,
    },
    {
      headers: {
        jwt: localStorage.getItem('token'),
      },
    },
  );
};
