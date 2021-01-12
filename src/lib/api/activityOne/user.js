import instance from '../instance';

const getUserEdit = async id => {
  try {
    const { data } = await instance.get(`/card/${id}`);
    console.log('[SUCCESS] GET User Edit', data);
    return data.data.questionCards;
  } catch (error) {
    console.log('[FAIL] GET User Edit', error);
  }
};

export default getUserEdit;
