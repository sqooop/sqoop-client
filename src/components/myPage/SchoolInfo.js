import { React, useEffect, useState } from 'react';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const SchoolInfoWrap = Styled.div`
  width: 730px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-size: 14px;

  .background {
    position: absolute;
    width: 730px;
    height: 84px;
    margin-top: -10px;
    z-index: 1;
  }

  .info {
    &--school {
      margin-bottom: 12px;
      display: flex;
      flex-direction: row;
      &__title {
        position: relative;
        z-index: 2;
        width: 28px;
        margin-left: 14px;
        margin-right: 53px;
      }
      &__time {
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: row;
        margin-right: 20px;
      }
    }
    &--major__title {
      position: relative;
      z-index: 2;
      width: 28px;
      margin-left: 14px;
      margin-right: 53px;
    }
  }

  .empty {
    flex: 1;
  }

  input[type="text"] {
    width: 254px;
    border: none;
    position: relative;
    text-align: left;
    z-index: 2;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #A5A5A5;
    }
  }
  input[type="number"] {
    position: relative;
    z-index: 2;
    border: none;
    text-align: right;
    &:focus {
      outline: none;
    }
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const SchoolInfo = ({
  index,
  school,
  major,
  startDate,
  endDate,
  education,
  saveEducation,
  currentTarget,
  setCurrentTarget,
  schoolIndex,
  setSchoolIndex,
  match,
}) => {
  const isReadOnly = match.path === '/mypage/profile' ? true : false;

  const [userSchool, setUserSchool] = useState(school);
  const [userMajor, setUserMajor] = useState(major);
  const [startYear, setStartYear] = useState(startDate.slice(0, 4));
  const [startMonth, setStartMonth] = useState(parseInt(startDate.slice(4, 6)));
  const [endYear, setEndYear] = useState(endDate.slice(0, 4));
  const [endMonth, setEndMonth] = useState(parseInt(endDate.slice(4, 6)));

  useEffect(() => {
    const fillZero = num => {
      num = num + '';
      if (num.length < 2) return '0' + num;
      else return num;
    };

    const userInfo = {
      school: userSchool,
      major: userMajor,
      startDate: startYear + fillZero(startMonth),
      endDate: endYear + fillZero(endMonth),
    };

    const newEducation = education;
    newEducation[index] = userInfo;
    saveEducation(newEducation);
  }, [userSchool, userMajor, startYear, startMonth, endYear, endMonth]);

  return (
    <SchoolInfoWrap>
      <div
        className="background"
        onClick={() => {
          isReadOnly ? setCurrentTarget('') : setCurrentTarget('deleteSchool');
          setSchoolIndex(index);
        }}
        style={
          index === schoolIndex && currentTarget === 'deleteSchool'
            ? { backgroundColor: '#EEEEEE' }
            : { backgroundColor: 'white' }
        }
      ></div>
      <div className="info--school">
        <span className="info--school__title">학교</span>
        <input
          type="text"
          value={userSchool}
          placeholder="학교명을 입력해주세요"
          readOnly={isReadOnly}
          onChange={event => {
            setUserSchool(event.target.value);
          }}
          onClick={() => {
            isReadOnly ? setCurrentTarget('') : setCurrentTarget('school');
            setSchoolIndex(index);
          }}
          style={
            index === schoolIndex &&
            (currentTarget === 'school' || currentTarget === 'deleteSchool')
              ? { backgroundColor: '#EEEEEE' }
              : { backgroundColor: 'white' }
          }
        />
        <div className="empty" />
        <div className="info--school__time">
          <input
            type="number"
            min="1900"
            max="2100"
            value={startYear}
            readOnly={isReadOnly}
            onChange={event => {
              setStartYear(event.target.value);
            }}
            onClick={() => {
              isReadOnly ? setCurrentTarget('') : setCurrentTarget('startYear');
              setSchoolIndex(index);
            }}
            style={
              index === schoolIndex &&
              (currentTarget === 'startYear' ||
                currentTarget === 'deleteSchool')
                ? { backgroundColor: '#EEEEEE', width: '35px' }
                : { backgroundColor: 'white', width: '35px' }
            }
          />
          년&nbsp;
          <input
            type="number"
            min="1"
            max="12"
            value={startMonth}
            readOnly={isReadOnly}
            onChange={event => {
              setStartMonth(event.target.value);
            }}
            onClick={() => {
              isReadOnly
                ? setCurrentTarget('')
                : setCurrentTarget('startMonth');
              setSchoolIndex(index);
            }}
            style={
              index === schoolIndex &&
              (currentTarget === 'startMonth' ||
                currentTarget === 'deleteSchool')
                ? { backgroundColor: '#EEEEEE', width: '20px' }
                : { backgroundColor: 'white', width: '20px' }
            }
          />
          월&nbsp;&nbsp;~&nbsp;&nbsp;
          <input
            type="number"
            min="1900"
            max="2100"
            value={endYear}
            readOnly={isReadOnly}
            onChange={event => {
              setEndYear(event.target.value);
            }}
            onClick={() => {
              isReadOnly ? setCurrentTarget('') : setCurrentTarget('endYear');
              setSchoolIndex(index);
            }}
            style={
              index === schoolIndex &&
              (currentTarget === 'endYear' || currentTarget === 'deleteSchool')
                ? { backgroundColor: '#EEEEEE', width: '35px' }
                : { backgroundColor: 'white', width: '35px' }
            }
          />
          년&nbsp;
          <input
            type="number"
            min="1"
            max="12"
            value={endMonth}
            readOnly={isReadOnly}
            onChange={event => {
              setEndMonth(event.target.value);
            }}
            onClick={() => {
              isReadOnly ? setCurrentTarget('') : setCurrentTarget('endMonth');
              setSchoolIndex(index);
            }}
            style={
              index === schoolIndex &&
              (currentTarget === 'endMonth' || currentTarget === 'deleteSchool')
                ? { backgroundColor: '#EEEEEE', width: '20px' }
                : { backgroundColor: 'white', width: '20px' }
            }
          />
          월
          {/* <span>{startYear}년</span>&nbsp;<span>{startMonth}월</span>
          &nbsp;~&nbsp;<span>{endYear}년</span>&nbsp;
          <span>{endMonth}월</span> */}
        </div>
      </div>
      <div className="info--major">
        <span className="info--major__title">전공</span>
        <input
          type="text"
          value={userMajor}
          placeholder="전공을 입력해주세요"
          readOnly={isReadOnly}
          onChange={event => {
            setUserMajor(event.target.value);
          }}
          onClick={() => {
            isReadOnly ? setCurrentTarget('') : setCurrentTarget('major');
            setSchoolIndex(index);
          }}
          style={
            index === schoolIndex &&
            (currentTarget === 'major' || currentTarget === 'deleteSchool')
              ? { backgroundColor: '#EEEEEE' }
              : { backgroundColor: 'white' }
          }
        />
      </div>
    </SchoolInfoWrap>
  );
};

export default withRouter(SchoolInfo);
