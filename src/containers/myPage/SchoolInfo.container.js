import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMyPageData } from '../../lib/api/myPage';
import { setEducation } from '../../store/modules/myPage';
import SchoolInfo from '../../components/myPage/SchoolInfo';
import Styled from 'styled-components';
import Plus from '../../assets/icons/Plus.svg';
import Minus from '../../assets/icons/Minus.svg';
import MinusOff from '../../assets/icons/MinusOff.svg';

const SchoolInfoContainerWrap = Styled.div`
  width: 730px;
  margin: 0 auto;
  margin-top: 48px;
  font-size: 14px;

  .info {
    &--title {
      font-weight: bold;
      margin-bottom: 26px;
      display: flex;
      justify-content: left;
      &__header {
        width: 730px;
        display: flex;
        flex-direction: row;

      }
      &__empty {
        flex: 1;
      }
      &__plus {
        margin-left: 8px;
      }
    }
  }
`;

const SchoolInfoContainer = ({ match }) => {
  const isReadOnly = match.path === '/mypage/profile' ? true : false;

  const [currentTarget, setCurrentTarget] = useState('');
  const [schoolIndex, setSchoolIndex] = useState('');

  const dispatch = useDispatch();
  const saveEducation = array => dispatch(setEducation(array));

  const education = useSelector(state => state.myPage.education);

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
      <div className="info--title">
        <div className="info--title__header">
          <div>학력</div>
          <div className="info--title__empty"></div>
          {isReadOnly ||
            (currentTarget === 'deleteSchool' ? (
              <img
                className="info--title__minus"
                src={Minus}
                alt=""
                onClick={() => {
                  const newEducation = education.filter((edu, idx) => {
                    return idx !== schoolIndex;
                  });
                  saveEducation(newEducation);
                }}
              />
            ) : (
              <img className="info--title__minus" src={MinusOff} alt="" />
            ))}
          {isReadOnly || (
            <img
              className="info--title__plus"
              src={Plus}
              alt=""
              onClick={() => {
                console.log(education.length);
                if (education.length === 0) {
                  saveEducation(
                    education.concat(
                      {
                        school: '',
                        major: '',
                        startDate: getLastMonth(),
                        endDate: getCurrentMonth(),
                      },
                      {
                        school: '',
                        major: '',
                        startDate: getLastMonth(),
                        endDate: getCurrentMonth(),
                      },
                    ),
                  );
                } else {
                  saveEducation(
                    education.concat({
                      school: '',
                      major: '',
                      startDate: getLastMonth(),
                      endDate: getCurrentMonth(),
                    }),
                  );
                }
              }}
            />
          )}
        </div>
      </div>
      {education.length !== 0 ? (
        education.map((edu, index) => (
          <>
            {index !== 0 && (
              <div style={{ height: '36px', backgroundColor: 'white' }}></div>
            )}
            <SchoolInfo
              index={index}
              school={edu.school}
              major={edu.major}
              startDate={edu.startDate}
              endDate={edu.endDate}
              saveEducation={saveEducation}
              education={education}
              currentTarget={currentTarget}
              setCurrentTarget={setCurrentTarget}
              schoolIndex={schoolIndex}
              setSchoolIndex={setSchoolIndex}
            />
          </>
        ))
      ) : (
        <SchoolInfo
          school={''}
          major={''}
          startDate={getLastMonth()}
          endDate={getCurrentMonth()}
          saveEducation={saveEducation}
          currentTarget={currentTarget}
          setCurrentTarget={setCurrentTarget}
          schoolIndex={schoolIndex}
          setSchoolIndex={setSchoolIndex}
        />
      )}
    </SchoolInfoContainerWrap>
  );
};

export default withRouter(SchoolInfoContainer);
