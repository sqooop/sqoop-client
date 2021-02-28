import { React } from 'react';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const SchoolInfoWrap = Styled.div`
  width: 730px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-size: 14px;

  .info {
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
          display: inline-block;
          text-align: center;
          color: black;
          margin: 0 6px;
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

const SchoolInfo = ({ school, major, startDate, endDate, match }) => {
  const isReadOnly = match.path === '/mypage/profile' ? true : false;
  const startYear = startDate.slice(0, 4);
  const startMonth = parseInt(startDate.slice(4, 6));
  const endYear = endDate.slice(0, 4);
  const endMonth = parseInt(endDate.slice(4, 6));

  return (
    <SchoolInfoWrap>
      <div className="info--school">
        <span className="info--school__title">학교</span>
        <input
          type="text"
          value={school}
          placeholder="학교명을 입력해주세요"
          readOnly={isReadOnly}
        />
        <div className="empty" />
        <div className="info--school__time">
          <span>{startYear}년</span>&nbsp;<span>{startMonth}월</span>
          &nbsp;~&nbsp;<span>{endYear}년</span>&nbsp;
          <span>{endMonth}월</span>
        </div>
      </div>
      <div className="info--major">
        <span className="info--major__title">전공</span>
        <input
          type="text"
          value={major}
          placeholder="전공을 입력해주세요"
          readOnly={isReadOnly}
        />
      </div>
    </SchoolInfoWrap>
  );
};

export default withRouter(SchoolInfo);
