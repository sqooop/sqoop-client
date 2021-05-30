import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyPageData } from '../../lib/api/myPage';
import {
  setLangHistory,
  setCertificateHistory,
  setAwardHistory,
} from '../../store/modules/myPage';
import CareerInfo from '../../components/myPage/CareerInfo';

const CareerInfoContainer = ({ saved }) => {
  const dispatch = useDispatch();
  const saveLangHistory = object => dispatch(setLangHistory(object));
  const saveCertificateHistory = object =>
    dispatch(setCertificateHistory(object));
  const saveAwardHistory = object => dispatch(setAwardHistory(object));

  const myPage = useSelector(state => state.myPage);
  const { langHistory, certificateHistory, awardHistory } = myPage;

  const [careerInfo, setCareerInfo] = useState({
    langHistory,
    certificateHistory,
    awardHistory,
  });

  useEffect(() => {
    (async () => {
      const myPageData = await getMyPageData();
      saveLangHistory(myPageData.LangHistory);
      saveCertificateHistory(myPageData.CertificateHistory);
      saveAwardHistory(myPageData.AwardHistory);
    })();
  }, []);

  useEffect(() => {
    saveLangHistory(careerInfo.langHistory);
    saveCertificateHistory(careerInfo.certificateHistory);
    saveAwardHistory(careerInfo.awardHistory);
  }, [careerInfo]);

  return (
    <>
      <CareerInfo
        type={'어학'}
        data={careerInfo.langHistory}
        origin={careerInfo}
        saveData={setCareerInfo}
      />
      <CareerInfo
        type={'자격증'}
        data={careerInfo.certificateHistory}
        origin={careerInfo}
        saveData={setCareerInfo}
      />
      <CareerInfo
        type={'수상 내역'}
        data={careerInfo.awardHistory}
        origin={careerInfo}
        saveData={setCareerInfo}
      />
    </>
  );
};

export default CareerInfoContainer;
