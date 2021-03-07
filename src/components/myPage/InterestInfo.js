import React from 'react';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const InterestInfoWrap = Styled.div`
  width: 730px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  margin-top: 61px;
  margin-bottom: 14px;
  color: black;

  .sector {
    width: 358px;
  }

  .title {
    font-weight: bold;
    margin-bottom: 26px;
  }

  .classify__big {
    margin-bottom: 15px;
  }

  span {
    margin-left: 14px;
    width: 90px;
    display: inline-block;
  }

  input {
    border: none;
    padding: 0;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #A5A5A5;
    }
  }
`;

const InterestInfo = ({ jobBig, jobSmall, skillBig, skillSmall, match }) => {
  const isReadOnly = match.path === '/mypage/profile' ? true : false;

  const InterestDiv = ({ className, title, big, small }) => {
    return (
      <div className={className}>
        <div className="title">{title}</div>
        <div className="classify__big">
          <span>대분류</span>
          <input
            type="text"
            placeholder="선택해주세요"
            readOnly={isReadOnly}
            value={big}
          />
        </div>
        <div className="classify__small">
          <span>소분류</span>
          <input
            type="text"
            placeholder="선택해주세요"
            readOnly={isReadOnly}
            value={small}
          />
        </div>
      </div>
    );
  };

  return (
    <InterestInfoWrap>
      <InterestDiv
        className={'sector'}
        title={'관심 분야'}
        big={jobBig}
        small={jobSmall}
      />
      <InterestDiv
        className={'skill'}
        title={'관심 역량'}
        big={skillBig}
        small={skillSmall}
      />
    </InterestInfoWrap>
  );
};

export default withRouter(InterestInfo);
