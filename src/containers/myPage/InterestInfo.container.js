import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyPageData } from '../../lib/api/myPage';
import {
  setJobBig,
  setJobSmall,
  setSkillBig,
  setSkillSmall,
} from '../../store/modules/myPage';
import InterestInfo from '../../components/myPage/InterestInfo';

const InterestInfoContainer = () => {
  const dispatch = useDispatch();
  const saveJobBig = string => dispatch(setJobBig(string));
  const saveJobSmall = string => dispatch(setJobSmall(string));
  const saveSkillBig = string => dispatch(setSkillBig(string));
  const saveSkillSmall = string => dispatch(setSkillSmall(string));

  const [isReady, setIsReady] = useState(false);

  const myPage = useSelector(state => state.myPage);
  const { jobBig, jobSmall, skillBig, skillSmall } = myPage;

  useEffect(() => {
    (async () => {
      const myPageData = await getMyPageData();
      saveJobBig(myPageData.jobBig);
      saveJobSmall(myPageData.jobSmall);
      saveSkillBig(myPageData.skillBig);
      saveSkillSmall(myPageData.skillSmall);
      setIsReady(true);
    })();
  }, []);

  return (
    isReady && (
      <InterestInfo
        jobBig={jobBig}
        jobSmall={jobSmall}
        skillBig={skillBig}
        skillSmall={skillSmall}
        saveJobBig={saveJobBig}
        saveJobSmall={saveJobSmall}
        saveSkillBig={saveSkillBig}
        saveSkillSmall={saveSkillSmall}
      />
    )
  );
};

export default InterestInfoContainer;
