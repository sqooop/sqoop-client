import instance from './instance';

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
