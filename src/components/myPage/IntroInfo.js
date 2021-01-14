import React from 'react';
import Styled from 'styled-components';

const IntroInfoWrap = Styled.div`
  width: 730px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 61px;
  margin-bottom: 48px;
  font-size: 14px;

  .title {
    font-weight: bold;
    margin-bottom: 15px;
  }

  .text {
    border: none;
    box-sizing: border-box;
    padding: 14px;
    width: inherit;
    height: 108px;
    resize: none;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #A5A5A5;
    }
  }
`;

const IntroInfo = () => {
  return (
    <IntroInfoWrap>
      <div className="title">자기 소개</div>
      <textarea className="text" placeholder="입력해주세요" />
    </IntroInfoWrap>
  );
};

export default IntroInfo;
