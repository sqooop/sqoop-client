import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyPageData } from '../../lib/api/myPage';
import { setEducation } from '../../store/modules/myPage';
import SchoolInfo from '../../components/myPage/SchoolInfo';
import Styled from 'styled-components';

const SchoolInfoContainerWrap = Styled.div`
  width: 730px;
  margin: 0 auto;
  margin-top: 48px;
  font-size: 14px;

  .info {
    &--title {
      width: 28px;
      font-weight: bold;
      margin-bottom: 26px;
      display: flex;
      justify-content: left;
    }
  }
`;

const SchoolInfoContainer = () => {
  const dispatch = useDispatch();
  const saveEducation = array => dispatch(setEducation(array));

  const myPage = useSelector(state => state.myPage);
  const education = myPage.education;

  useEffect(() => {
    (async () => {
      const myPageData = await getMyPageData();
      saveEducation(myPageData.Education);
    })();
  }, []);

  function getLastMonth() {
    const date = new Date();
    const year =
      date.getMonth() === 0 ? date.getFullYear() - 1 : date.getFullYear();
    const month = date.getMonth() === 0 ? 12 : date.getMonth();
    const monthf = month < 10 ? '0' + month : month;
    return String(year) + String(monthf);
  }

  function getCurrentMonth() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const monthf = month < 10 ? '0' + month : month;
    return String(year) + String(monthf);
  }

  return (
    <SchoolInfoContainerWrap>
      <div className="info--title">학력</div>
      {education.length !== 0 ? (
        education.map(edu => (
          <SchoolInfo
            key={edu.school}
            school={edu.school}
            major={edu.major}
            startDate={edu.startDate}
            endDate={edu.endDate}
          />
        ))
      ) : (
        <SchoolInfo
          school={''}
          major={''}
          startDate={getLastMonth()}
          endDate={getCurrentMonth()}
        />
      )}
    </SchoolInfoContainerWrap>
  );
};

export default SchoolInfoContainer;
