import instance from '../instance';

const getOneActivity = async ({ id }) => {
  try {
    const { data } = await instance.get(`/activity/getOneActivity/${id}`);
    console.log('[SUCCESS] GET One Activity', data);
    return data.data;
  } catch (error) {
    console.log('[FAIL] GET One Activity', error);
  }
};

export default getOneActivity;
