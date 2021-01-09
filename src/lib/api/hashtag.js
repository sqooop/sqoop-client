import instance from './instance';

export const getHashtag = async () => {
  try {
    const { data } = await instance.get(`/hashtag`);
    console.log('[SUCCESS] GET HASHTAG', data.data);
    return data.data;
  } catch (e) {
    console.log('[FAIL] GET HASHTAG', e);
    throw e;
  }
};
