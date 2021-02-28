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
  }, [myPage]);

  return (
    <SchoolInfoContainerWrap>
      <div className="info--title">학력</div>
      {education ? (
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
        <SchoolInfo school={''} major={''} startDate={''} endDate={''} />
      )}
    </SchoolInfoContainerWrap>
  );
};

export default SchoolInfoContainer;
