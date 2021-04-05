import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyPageData } from '../../lib/api/myPage';
import {
  setLangHistory,
  setCertificateHistory,
  setAwardHistory,
} from '../../store/modules/myPage';
import CareerInfo from '../../components/myPage/CareerInfo';

const InterestInfoContainer = () => {
  const dispatch = useDispatch();
  const saveLangHistory = object => dispatch(setLangHistory(object));
  const saveCertificateHistory = object =>
    dispatch(setCertificateHistory(object));
  const saveAwardHistory = object => dispatch(setAwardHistory(object));

  const myPage = useSelector(state => state.myPage);
  const { langHistory, certificateHistory, awardHistory } = myPage;

  useEffect(() => {
    (async () => {
      const myPageData = await getMyPageData();
      // console.log(myPageData);
      saveLangHistory(myPageData.LangHistory);
      saveCertificateHistory(myPageData.CertificateHistory);
      saveAwardHistory(myPageData.AwardHistory);
    })();
  });

  return (
    <>
      <CareerInfo type={'어학'} data={langHistory} saveData={saveLangHistory} />
      <CareerInfo
        type={'자격증'}
        data={certificateHistory}
        saveData={saveCertificateHistory}
      />
      <CareerInfo
        type={'수상 내역'}
        data={awardHistory}
        saveData={saveAwardHistory}
      />
    </>
  );
};

export default InterestInfoContainer;
