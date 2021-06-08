import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyPageData } from '../../lib/api/myPage';
import { setIntroduce } from '../../store/modules/myPage';
import IntroInfo from '../../components/myPage/IntroInfo';

const InterestInfoContainer = () => {
  const dispatch = useDispatch();
  const saveIntroduce = string => dispatch(setIntroduce(string));

  const introduce = useSelector(state => state.myPage.introduce);
  const [introText, setIntroText] = useState(introduce);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      const myPageData = await getMyPageData();
      saveIntroduce(myPageData.introduce);
      setIntroText(myPageData.introduce);
      setIsReady(true);
    })();
  }, []);

  const handleChange = event => {
    setIntroText(event.target.value);
    saveIntroduce(event.target.value);
  };

  return (
    isReady && (
      <>
        <IntroInfo introduce={introText} handleChange={handleChange} />
      </>
    )
  );
};

export default InterestInfoContainer;
