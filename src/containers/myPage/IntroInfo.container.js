import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyPageData } from '../../lib/api/myPage';
import { setIntroduce } from '../../store/modules/myPage';
import IntroInfo from '../../components/myPage/IntroInfo';

const InterestInfoContainer = () => {
  const dispatch = useDispatch();
  const saveIntroduce = string => dispatch(setIntroduce(string));

  const introduce = useSelector(state => state.myPage.introduce);

  useEffect(() => {
    (async () => {
      const myPageData = await getMyPageData();
      saveIntroduce(myPageData.introduce);
    })();
  }, []);

  return (
    <>
      <IntroInfo introduce={introduce} />
    </>
  );
};

export default InterestInfoContainer;
