import instance from '../instance';

const editActivity = async detail => {
  try {
    const formData = new FormData();
    for (var key in detail) {
      if (key === 'detailJobTag' || key === 'detailSkillTag') {
        for (let i = 0; i < detail[key].length; i++) {
          formData.append(`${key}[${i}]`, detail[key][i]);
        }
      } else {
        formData.append(key, detail[key]);
      }
    }
    const { data } = await instance.put(`/activity/update`, formData);
    console.log('[SUCCESS] PUT One Activity', data);
    return data.data;
  } catch (error) {
    console.log('[FAIL] PUT One Activity', error);
  }
};

export default editActivity;
