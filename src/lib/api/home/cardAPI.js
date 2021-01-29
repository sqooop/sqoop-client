import instance from '../instance';

export const getMonthAPI = async () => {
  try {
    const { data } = await instance.get(`/activity/getActivityDate`, {});
    // console.log(`[SUCCESS] GET MONTH DATA`, data);
    return data.data;
  } catch (e) {
    // console.log(`[FAIL] GET MONTH DATA`, e);
    throw e;
  }
};

export const getCardAPI = async month => {
  try {
    const { data } = await instance.get(`activity/${month}/getMonthlyActivity`);
    // console.log(`[SUCCESS] GET CARD ACTIVITIES`, data);
    return data.data;
  } catch (e) {
    // console.log(`[FAIL] GET CARD ACTIVITIES`, e);
  }
};
