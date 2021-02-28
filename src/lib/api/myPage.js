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
