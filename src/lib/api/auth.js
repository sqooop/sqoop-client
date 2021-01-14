import instance from './instance';

export const signin = async ({ email, password }) => {
  return await instance.post(`/user/signin`, {
    email,
    password,
  });
};
