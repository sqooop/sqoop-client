import instance from './instance';

export const getActivityName = async id => {
  try {
    const { data } = await instance.get(`activity/getOneActivity/${id}`);
    // console.log('[SUCCESS] GET ACTIVITY NAME');
    return data.data.selectedActivity.title;
  } catch (error) {
    // console.log('[FAIL] GET ACTIVITY NAME', error);
  }
};

export const getCardInfo = async id => {
  try {
    const { data } = await instance.get(`card/${id}`);
    // console.log('[SUCCESS] GET Card Info');
    return data.data;
  } catch (error) {
    // console.log('[FAIL] GET Card Info', error);
  }
};

export const createCard = async card => {
  try {
    const { data } = await instance.post(`card/create`, card);
    // console.log('[SUCCESS] CREATE CARD', data.data);
    return data.data;
  } catch (error) {
    // console.log('[FAIL] CREATE CARD', error);
  }
};

export const updateCard = async card => {
  try {
    const { data } = await instance.put(`card/update`, card);
    // console.log('[SUCCESS] UPDATE CARD', data.data);
  } catch (error) {
    // console.log('[FAIL} UPDATE CARD', error);
  }
};
