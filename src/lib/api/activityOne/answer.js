import instance from '../instance';

const getBasicEdit = async () => {
  try {
    const { data } = await instance.get(`/card/update`);
    // console.log('[SUCCESS] GET User Edit', data);
    return data.data.questionCards;
  } catch (error) {
    // console.log('[FAIL] GET User Edit', error);
  }
};

export default getBasicEdit;
