import axios from 'axios';

const editActivity = async detail => {
  try {
    const formData = new FormData();
    for (let key in detail) {
      if (
        key === 'jobTag' ||
        key === 'skillTag' ||
        key === 'questions' ||
        key === 'contents'
      ) {
        for (let i = 0; i < detail[key].length; i++) {
          formData.append(`${key}[${i}]`, detail[key][i]);
        }
      } else {
        formData.append(key, detail[key]);
      }
    }
    const { data } = await axios.put(
      `https://sqoop.kro.kr/activity/update`,
      formData,
      {
        headers: {
          'Content-type': 'multipart/form-data',
          jwt: sessionStorage.getItem('token'),
        },
      },
    );
    // console.log('[SUCCESS] PUT One Activity', data);
    return data.data;
  } catch (error) {
    // console.log('[FAIL] PUT One Activity', error);
  }
};

export default editActivity;
