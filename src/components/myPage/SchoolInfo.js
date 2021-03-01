<<<<<<< HEAD
import { React } from 'react';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom';
=======
import { React, useState } from 'react';
import Styled from 'styled-components';
>>>>>>> c701b541a4661ae58261808483f8b9182a287066

const SchoolInfoWrap = Styled.div`
  width: 730px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
<<<<<<< HEAD
  font-size: 14px;

  .info {
=======
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
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
    &--school {
      margin-bottom: 12px;
      display: flex;
      flex-direction: row;
      &__title {
        width: 28px;
        margin-left: 14px;
        margin-right: 53px;
      }
      &__time {
        & > span {
<<<<<<< HEAD
          display: inline-block;
          text-align: center;
          color: black;
          margin: 0 6px;
=======
          width: 80px;
          display: inline-block;
          text-align: center;
          color: #A5A5A5;
          margin: 0 10px;
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
        }
      }
    }
    &--major__title {
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
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #A5A5A5;
    }
  }
`;

<<<<<<< HEAD
const SchoolInfo = ({ school, major, startDate, endDate, match }) => {
  const isReadOnly = match.path === '/mypage/profile' ? true : false;
  const startYear = startDate.slice(0, 4);
  const startMonth = parseInt(startDate.slice(4, 6));
  const endYear = endDate.slice(0, 4);
  const endMonth = parseInt(endDate.slice(4, 6));

  return (
    <SchoolInfoWrap>
=======
const SchoolInfo = () => {
  const [school, setSchool] = useState('한국외국어대학교');
  const [major, setMajor] = useState('네덜란드어, 융복합소프트웨어');

  return (
    <SchoolInfoWrap>
      <div className="info--title">학력</div>
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
      <div className="info--school">
        <span className="info--school__title">학교</span>
        <input
          type="text"
          value={school}
<<<<<<< HEAD
          placeholder="학교명을 입력해주세요"
          readOnly={isReadOnly}
        />
        <div className="empty" />
        <div className="info--school__time">
          <span>{startYear}년</span>&nbsp;<span>{startMonth}월</span>
          &nbsp;~&nbsp;<span>{endYear}년</span>&nbsp;
          <span>{endMonth}월</span>
=======
          onChange={event => setSchool(event.target.value)}
          placeholder="학교명을 입력해주세요"
        />
        <div className="empty" />
        <div className="info--school__time">
          <span>2017년/3월</span>~<span>2022년/2월</span>
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
        </div>
      </div>
      <div className="info--major">
        <span className="info--major__title">전공</span>
        <input
          type="text"
          value={major}
<<<<<<< HEAD
          placeholder="전공을 입력해주세요"
          readOnly={isReadOnly}
=======
          onChange={event => setMajor(event.target.value)}
          placeholder="전공을 입력해주세요"
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
        />
      </div>
    </SchoolInfoWrap>
  );
};

<<<<<<< HEAD
export default withRouter(SchoolInfo);
=======
export default SchoolInfo;
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
