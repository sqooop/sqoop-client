import React from 'react';
import Styled from 'styled-components';

const InterestInfoWrap = Styled.div`
width: 730px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  margin-top: 61px;
  color: #A5A5A5;

  .sector {
    width: 365px;
  }

  .title {
    color: black;
    font-weight: bold;
    margin-bottom: 26px;
  }

  .classify__big {
    margin-bottom: 15px;
  }

  span {
    width: 39px;
    margin-left: 14px;
    margin-right: 42px;
    color: black;
  }
`;

const InterestInfo = () => {
  const InterestDiv = ({ className, title }) => {
    return (
      <div className={className}>
        <div className="title">{title}</div>
        <div className="classify__big">
          <span>대분류</span>선택해주세요
        </div>
        <div className="classify__small">
          <span>소분류</span>선택해주세요
        </div>
      </div>
    );
  };

  return (
    <InterestInfoWrap>
      <InterestDiv className={'sector'} title={'관심 분야'} />
      <InterestDiv className={'capability'} title={'관심 역량'} />
    </InterestInfoWrap>
  );
};

export default InterestInfo;
