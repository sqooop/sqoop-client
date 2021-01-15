import { React, useState } from 'react';
import Styled from 'styled-components';

const SchoolInfoWrap = Styled.div`
  width: 730px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
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
          width: 80px;
          display: inline-block;
          text-align: center;
          color: #A5A5A5;
          margin: 0 10px;
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

const SchoolInfo = () => {
  const [school, setSchool] = useState('한국외국어대학교');
  const [major, setMajor] = useState('네덜란드어, 융복합소프트웨어');

  return (
    <SchoolInfoWrap>
      <div className="info--title">학력</div>
      <div className="info--school">
        <span className="info--school__title">학교</span>
        <input
          type="text"
          value={school}
          onChange={event => setSchool(event.target.value)}
          placeholder="학교명을 입력해주세요"
        />
        <div className="empty" />
        <div className="info--school__time">
          <span>2017년/3월</span>~<span>2022년/2월</span>
        </div>
      </div>
      <div className="info--major">
        <span className="info--major__title">전공</span>
        <input
          type="text"
          value={major}
          onChange={event => setMajor(event.target.value)}
          placeholder="전공을 입력해주세요"
        />
      </div>
    </SchoolInfoWrap>
  );
};

export default SchoolInfo;
