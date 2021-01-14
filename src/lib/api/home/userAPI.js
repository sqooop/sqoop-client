import instance from '../instance';

export const getUserName = async () => {
  try {
    const { data } = await instance.get(`mypage`);
    console.log(`[SUCCESS] GET USER NAME`, data.data);
    return data.data.userName;
  } catch (e) {
    console.log(`[FAIL] GET USER NAME`, e);
  }
};
