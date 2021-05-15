import instance from './instance';

export const getMyPageData = async () => {
  try {
    const { data } = await instance.get('/mypage');
    // console.log('[SUCCESS] GET My Page Data');
    return data.data;
  } catch (error) {
    // console.log('[FAIL] GET My Page Data', error);
  }
};

export const updateMyPageData = async myPageData => {
  try {
    const { data } = await instance.put('/mypage/update', myPageData);
    // console.log('[SUCCESS] PUT My Page Data');
    return data.data;
  } catch (error) {
    // console.log('[FAIL] PUT My Page Data', error);
  }
};
