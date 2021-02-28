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
      `http://54.180.189.240:3000/activity/update`,
      formData,
      {
        headers: {
          'Content-type': 'multipart/form-data',
          jwt: localStorage.getItem('token'),
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
