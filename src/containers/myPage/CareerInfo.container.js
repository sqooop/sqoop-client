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

  const [careerInfo, setCareerInfo] = useState(null);

  useEffect(() => {
    const getInitialData = async () => {
      const myPageData = await getMyPageData();
      const { LangHistory, CertificateHistory, AwardHistory } = myPageData;
      const newData = {
        langHistory: LangHistory,
        certificateHistory: CertificateHistory,
        awardHistory: AwardHistory,
      };
      return newData;
    };
    (async () => {
      const result = await getInitialData();
      setCareerInfo(result);
    })();
  }, []);

  useEffect(() => {
    if (careerInfo) {
      saveLangHistory(careerInfo.langHistory);
      saveCertificateHistory(careerInfo.certificateHistory);
      saveAwardHistory(careerInfo.awardHistory);
    }
  }, [careerInfo]);

  return (
    careerInfo && (
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
    )
  );
};

export default CareerInfoContainer;
